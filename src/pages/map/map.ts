import { EliteApi } from './../../providers/elite-api/elite-api';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

declare var window: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public map: any = {};

  constructor(private eliteApi: EliteApi, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad MapPage');
    let games = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    let location = tourneyData.locations[games.locationId];
    
    this.map = {
      //lat: location.latitude,
      lat: 51.503544, 
      
      //lng: location.longitude,
      lng: -0.127646,

      zoom: 12,
      markerLabel: games.location 
    };
  }

  getDirections() { 
    console.log('getDirections MapPage');
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  }

}
