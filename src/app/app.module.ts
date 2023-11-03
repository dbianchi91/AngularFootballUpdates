import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { StandingComponent } from './components/standing/standing.component';
import { TeamMatchComponent } from './components/team-match/team-match.component';
import { StandingService } from './services/standing.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StandingComponent,
    MenuComponent,
    TeamMatchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
