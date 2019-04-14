import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

  NovedadesUy: any[] = [];

  constructor( private spot: SpotifyService ) {
    this.spot.getNewReleases()
        .subscribe( (data: any) => {
            this.NovedadesUy = data.albums.items;
        });
  }
}
