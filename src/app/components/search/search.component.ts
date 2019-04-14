import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  cancionesRet: any[] = [];

  constructor( private spot: SpotifyService) { }

  buscar(input:string){
    this.spot.getTrack(input)
      .subscribe( (data: any) => {
      //console.log(data.tracks.items);
        this.cancionesRet = data.tracks.items;
      });
  }
}
