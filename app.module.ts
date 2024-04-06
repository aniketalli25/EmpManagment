import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { UserDataListComponent } from './user-data-list/user-data-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataListComponent,
    UserCardComponent,
    TeamDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,




  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
