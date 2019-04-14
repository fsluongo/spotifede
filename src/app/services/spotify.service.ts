import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

constructor( private http: HttpClient) { }

getSpotify( request: string ){
    const url = `https://api.spotify.com/v1/${ request }`;

    //IMPORTANT: At line 16, repleace after 'Bearer ' with the updated token as explained at 'readme.me' file.
    const headers = new HttpHeaders({
          'Authorization': 'Bearer  BQCry9PFgHN7C_tRHeLhWclp9CfEDnSqMxWIlp7Q89ApEDq5I4sqtm8FZyPc-ssq0MOjTEUffCG_gtXlxj0'
    });

    return this.http.get(url, { headers });
}



getNewReleases() {

    return this.getSpotify('browse/new-releases?limit=15')
}

getTrack( input:string ){

  return this.getSpotify(`search?q=${ input }&type=track`)

}

}
