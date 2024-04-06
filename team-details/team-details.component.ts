import { Component, Input } from '@angular/core';
import { TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {
  @Input() teamMembers: any[] = []; // Remove ngOnInit and subscription

  constructor(private teamService: TeamServiceService) { }
  ngOnInit(): void {
    this.teamService.teamMembers$.subscribe(teamMembers => {
      this.teamMembers = teamMembers;
    });
  }
}
