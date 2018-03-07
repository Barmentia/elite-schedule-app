import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EliteApi {

  private baseUrl = 'https://elite-schedule-app-8f886.firebaseio.com'

  constructor(public http: Http) {

  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res => resolve(res.json()));
    })
  }
}
