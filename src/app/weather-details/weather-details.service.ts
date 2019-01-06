import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailsService {

  constructor(private http: HttpClient) {
  }

  public getWeatherData(selectedCity) {
    // Call API
    return this.http.get('https://api.weatherbit.io/v2.0/current?city=' + selectedCity + ',IN&key=ebec49a548744cfc8c179cd4bb7c734d')
      .pipe(
        map((res) => res)
      );
  }

  public getAllCities() {
    this.http.get('./cities.json').subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
