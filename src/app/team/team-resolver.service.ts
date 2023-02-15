import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Team } from './team.model';
import { Observable } from 'rxjs';
import { TeamService } from './team.service';

@Injectable({
  providedIn: 'root'
})
export class TeamResolverService implements Resolve<Team> {

  constructor(private teamService: TeamService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Team | Observable<Team> | Promise<Team> {
    const id = route.paramMap.get('id') as string;
    return this.teamService.getPlayersTeam(id)
  }
}
