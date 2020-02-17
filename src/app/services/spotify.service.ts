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
      Authorization: 'Bearer BQDXojEHKep0oVmJc2IbHX93gBOLysQhPt3bMJCQ59ege9GMteGgGUk4oH0_TB2nYvHS8i-xXgbudo3e1K0',

    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers})
    .subscribe(data => {
      console.log(data);
    });

  }
}
