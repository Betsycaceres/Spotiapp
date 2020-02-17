import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo!!!');
  }
  getNewReleses() {
    const headers = new HttpHeaders({
     'Authorization': 'Bearer BQAypo55t08t17PN_p_TMJf97Tzsc0r7kx1k7duTJvP-_Vo6oHCF7b3i9nq742p7oKBC5VZBXmvHa64HOfA',

    });
    return  this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }
}
