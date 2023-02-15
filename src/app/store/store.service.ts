import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { League } from '../league/league.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  league$: Observable<League>;
  private _state$: BehaviorSubject<League>;

  constructor() {
    const initialState: League = {
      _id: '',
      name: '',
      sport: '',
      teams: []
    };
    this._state$ = new BehaviorSubject(initialState);
    this.league$ = this._state$.asObservable();
  }
  get state (): League {
    return this._state$.getValue();
  }
  
  setState(nextState: League): void {
    this._state$.next(nextState);
  }
  
}

