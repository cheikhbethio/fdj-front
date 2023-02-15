import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player/player.model';
import { Team } from './team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TeamComponent {
  public players: Player[] = [];
  public team: Team | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ team }) => {``
      this.team = team;
      this.players = team.players
      this.changeDetector.markForCheck();
    })
  }

  public goBack(): void {
    this.router.navigate(['/'])
  }

}
