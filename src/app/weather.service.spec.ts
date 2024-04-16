import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'c51d3b232244fc396a6af559bbb2a799'; // Tu clave de API de OpenWeatherMap

  constructor(private http: HttpClient) { }

  getWeatherByCoordinates(latitude: number, longitude: number): Observable<any> {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const params = new HttpParams()
      .set('lat', latitude.toString())
      .set('lon', longitude.toString())
      .set('appid', this.apiKey);

    return this.http.get(url, { params });
  }
}

