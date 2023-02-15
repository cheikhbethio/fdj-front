import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from "../app.module";
import { PlayerComponent } from '../player/player.component';



@NgModule({
    declarations: [
    PlayerComponent,
    TeamComponent, 
    ],
    imports: [
        CommonModule, TeamRoutingModule, SharedModule,
    ]
})
export class TeamModule { }
