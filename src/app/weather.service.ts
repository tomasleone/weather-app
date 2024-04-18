import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // Importa los operadores tap y catchError

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'c51d3b232244fc396a6af559bbb2a799'; // Tu clave de API de OpenWeatherMap

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(apiUrl).pipe(
      tap(data => console.log('Weather data:', data)), // Utiliza el operador tap para imprimir los datos del clima en la consola
      catchError(this.handleError) // Maneja cualquier error utilizando el método handleError
    );
  }

  // Método para manejar errores
  private handleError(error: any) {
    console.error('Error fetching weather data:', error);
    return throwError(error); // Lanza el error para que el componente lo maneje
  }
}
