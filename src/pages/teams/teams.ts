import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import  * as _ from 'lodash';

import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  public teams = [];
  private allTeams: any;
  private allTeamDivisions: any;
  
  constructor(private loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        console.log('division teams', this.teams);

        this.allTeamDivisions = _.chain(data.teams)
                                .groupBy('division')
                                .toPairs()
                                .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
                                .value();

        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);

        loader.dismiss();
      });
    });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
