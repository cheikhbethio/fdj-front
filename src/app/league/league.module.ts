import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './league.component';
import { SharedModule } from '../shared/shared.module';
import { LeagueRoutingModule } from './league-routing.module';
import { LeagueListComponent } from './league-list/league-list.component';



@NgModule({
  declarations: [
    LeagueComponent,
    LeagueListComponent
  ],
  imports: [
    CommonModule, SharedModule, LeagueRoutingModule
  ]
})
export class LeagueModule { }
