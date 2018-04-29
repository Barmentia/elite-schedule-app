import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { GamePage } from '../pages/game/game';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamsPage } from '../pages/teams/teams';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApi } from '../providers/elite-api/elite-api';
import { UserSettings } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';
import { SqlStorage } from '../providers/sql-storage/sql-storage';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey:'AIzaSyB9HSUHtvdu0BY_Vw1f6VxfOEOu3MA1-HQ' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    UserSettings,
    SqlStorage
  ]
})
export class AppModule {}
