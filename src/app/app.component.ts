import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Agregar esta línea
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    // Utilizamos las coordenadas de Nueva York para probar
    const latitude = 40.7128;
    const longitude = -74.0060;

    this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data); // Solo para verificar en la consola
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}


