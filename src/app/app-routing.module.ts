import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { StandingComponent } from './components/standing/standing.component';
import { TeamMatchComponent } from './components/team-match/team-match.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children:[
      {
        path: 'standings/:countryId',
        component: StandingComponent,
      }
    ]
  },
  {
    path: 'team/:teamId',
    component: TeamMatchComponent,
  },
  {
    path: '**',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
