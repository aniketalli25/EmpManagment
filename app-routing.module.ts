// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDataListComponent } from './user-data-list/user-data-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path : '', component : UserDataListComponent }, // Default route to UserListComponent
  { path: 'user-card', component: UserCardComponent },
  { path: 'team-details', component: TeamDetailsComponent }, // Default route to UserListComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
