import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public getPlayersTeam(id: string): Observable<Team> {
    return this.http.get<Team>(`/api/teams/${id}/players`)
  }

}
