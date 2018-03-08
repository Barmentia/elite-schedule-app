import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home';

import { EliteApi } from '../../providers/elite-api/elite-api';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id)
      .subscribe(data => {
        this.teams = data.teams;
      });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
