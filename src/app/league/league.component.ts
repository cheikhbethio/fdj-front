import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Team } from '../team/team.model';
import { LeagueService } from './league.service';
import { League } from './league.model';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueComponent {

  public searchValue: string = '';
  public teams: Team[] = [];
  public hasError = false;
  public error: string = '';

  constructor(
    private leagueService: LeagueService,
    private changeDetector: ChangeDetectorRef,
    private storeService: StoreService
  ) {
  }

  ngOnInit(): void {
    const league = this.storeService.state;
    console.log('+++++++++++++: league.component.ts:29 ~ LeagueComponent ~ ngOnInit ~ league', league);
    if (league?.name) {
      this.getSearchValue(league.name)
    }
  }

  public getSearchValue($event: string) {
    this.searchValue = $event;
    this.leagueService
      .getTeamsByLeagues(this.searchValue)
      .subscribe({
        next: (league: League[]) => {
          const _league = league[0] || undefined; 
          this.teams = _league?.teams;
          this.storeService.setState(_league);
        },
        error: (error) => {
          this.hasError = true;
          this.error = error?.message || 'Internal Error';
        },
        complete: () => this.changeDetector.markForCheck()
    });
  }



}


