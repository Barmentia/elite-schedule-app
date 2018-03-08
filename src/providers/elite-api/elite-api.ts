import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {

  private baseUrl = 'https://elite-schedule-app-8f886.firebaseio.com'
  private CurrentTourney: any = {};

  constructor(public http: HttpClient) {

  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res));
    })
  }

  getTournamentData(tourneId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneId}.json`)
      .map(response => {
        this.CurrentTourney = response;
        return this.CurrentTourney;
      })
  }

}
