import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  private _teamMembers = new BehaviorSubject<any[]>([]);
  teamMembers$ = this._teamMembers.asObservable();

  constructor() { }

  updateTeamMembers(teamMembers: any[]) {
    this._teamMembers.next(teamMembers);
  }
}
