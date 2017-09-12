import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusaqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http ) { }

  //fUNCION PARA ARTISTAAS

  getArtistas( termino:string ){
    let query = `?q=${ termino }&type=artist`;
    console.log(query);
    let url = this.urlBusaqueda + query;
    console.log(termino);
    //observable parecido a la promesa
    return this.http.get( url ).map( resp => {
        console.log(resp);
        })

  }


}
