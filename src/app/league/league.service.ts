import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from './league.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(
    private http: HttpClient
  ) { }

  public getTeamsByLeagues(leagueId: string): Observable<League[]> {
    const url = `/api/leagues?name=${leagueId}`;
    return this.http.get<League[]>(url);
  }
}
