import { Component, Input } from '@angular/core';
import { Team } from '../../team/team.model';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent {
  @Input() set teams(loadTeams: Team[]) {
    console.log('file: league-list.component.ts:11 ~ LeagueListComponent ~ @Input ~ loadTeams', loadTeams);
    this.teamsToDisplay = loadTeams
  }

  public teamsToDisplay: Team[] = [];

}


// English Premier League