import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class EliteApi {

  private baseUrl = 'https://elite-schedule-app-8f886.firebaseio.com'
  private currentTourney: any = {};
  private tourneyData = {};

  constructor(public http: HttpClient) {

  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res));
    })
  }

  // getTournamentData(tourneId): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/tournaments-data/${tourneId}.json`)
  //     .map(response => {
  //       this.currentTourney = response;
  //       return this.currentTourney;
  //     })
  // }

  getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any> {
    if (!forceRefresh && this.tourneyData[tourneyId]) {
        this.currentTourney = this.tourneyData[tourneyId];
        console.log('**no need to make HTTP call, just return the data'); 
        return Observable.of(this.currentTourney);
    }

    // don't have data yet
    console.log('**about to make HTTP call');
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
        .map(response => {
            this.tourneyData[tourneyId] = response;
            this.currentTourney = this.tourneyData[tourneyId];
            return this.currentTourney;
        });
  }

  getCurrentTourney() {
    return this.currentTourney;
  }

  refreshCurrentTourney(){
    return this.getTournamentData(this.currentTourney.tournament.id, true); 
  }
}
