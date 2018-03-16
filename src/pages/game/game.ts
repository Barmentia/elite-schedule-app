import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  public game: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GamePage');
    this.game = this.navParams.data;
  }

  // It gets the current tournament from the Api, it finds the team in the collection of teams 
  // and take the team and passing it as a navigation parameter to the Team Home page.
  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team); 
  }

}
