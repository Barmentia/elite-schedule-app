import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
//import { Events, LocalStorage, Storage } from 'ionic-angular';
//simport * as _ from 'lodash';

@Injectable()
export class UserSettings {

  constructor(private storage: Storage, private events: Events) {
    console.log('Hello UserSettingsProvider Provider');
  }

  favoriteTeam(team, tournamentId, tournamentName){
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id, JSON.stringify(item));
        this.events.publish('favorites:changed');
    }

    unfavoriteTeam(team){
        this.storage.remove(team.id);
        this.events.publish('favorites:changed');
    }

    isFavoriteTeam(teamId) : Promise<boolean>{
        return this.storage.get(teamId).then(value => value ? true : false);
    }

    getAllFavorites(){
        let results = [];
        this.storage.forEach(data => {
          results.push(JSON.parse(data));
        });
        return results;
        // _.forIn(window.localStorage, (v, k) => {
        //     items.push(JSON.parse(v));
        // });
        // return items.length ? items : null;
    }
}