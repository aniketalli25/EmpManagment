import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user-service.service';
import { TeamServiceService } from '../team-service.service'; // Import TeamServiceService
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.css']
})
export class UserDataListComponent implements OnInit {
  @Output() teamCreated = new EventEmitter<any[]>();

  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 20;
  selectedUsers: any[] = [];
  uniqueUsers: any[] = [];

  selectedDomains: string[] = [];
  selectedGenders: string[] = [];
  selectedAvailability: string[] = [];

  teamCreatedFlag: boolean = false;

  constructor( private router : Router , private userService: UserService, private teamService: TeamServiceService) {} // Inject TeamServiceService

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = [...this.users];
    });
  }

  search() {
    if (!this.searchTerm.trim()) {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user =>
        typeof user.first_name === 'string' && user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.applyFilters();
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  applyFilters() {
    this.filteredUsers = this.users.filter(user =>
      (this.selectedDomains.length === 0 || this.selectedDomains.includes(user.domain)) &&
      (this.selectedGenders.length === 0 || this.selectedGenders.includes(user.gender)) &&
      (this.selectedAvailability.length === 0 || this.selectedAvailability.includes(user.available ? 'Yes' : 'No'))
    );
  }

  getUniqueDomains(): string[] {
    return Array.from(new Set(this.users.map(user => user.domain)));
  }

  getUniqueGenders(): string[] {
    return Array.from(new Set(this.users.map(user => user.gender)));
  }

  getUniqueAvailabilities(): string[] {
    return Array.from(new Set(this.users.map(user => user.available ? 'Yes' : 'No')));
  }

  toggleUserSelection(user: any) {
    const index = this.selectedUsers.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  isUserSelected(user: any): boolean {
    return this.selectedUsers.some(u => u.id === user.id);
  }

  createTeam() {
    if (this.selectedUsers.length === 0) {
      console.log("No users selected for team creation.");
      return;
    }

    const uniqueUsers = this.selectedUsers.filter((user, index, self) =>
      index === self.findIndex((u) => (
        u.domain === user.domain && u.available === user.available
      ))
    );

    if (uniqueUsers.length === 0) {
      console.log("No unique users selected for team creation.");
      return;
    }

    this.teamCreated.emit(uniqueUsers);
    this.teamCreatedFlag = true;

    // Update team members in the TeamServiceService
    this.teamService.updateTeamMembers(uniqueUsers);

    this.selectedUsers = [];
    this.router.navigateByUrl('team-details');
  }
}
