import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

constructor( private http: HttpClient) { }

getSpotify( request: string ){
    const url = `https://api.spotify.com/v1/${ request }`;

    //El token es obtenido utilizando postman con las credenciales de cliente de SpotifyService, el mismo debe ser acutalizado luego de una hora.
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
