import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage } from '../tournaments/tournaments';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { TeamHomePage } from '../team-home/team-home';
import { UserSettings } from '../../providers/user-settings/user-settings';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites = [];

  constructor(
    public nav: NavController, 
    public navParams: NavParams, 
    private userSettings: UserSettings, 
    public eliteApi: EliteApi, 
    public loadingController: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
        content: 'Getting data...',
        dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.nav.push(TeamHomePage, favorite.team));
  }

  ionViewDidEnter() {
    //this.favorites = this.userSettings.getAllFavorites();
    this.userSettings.getAllFavorites().then(favs => this.favorites = favs);
  }
}