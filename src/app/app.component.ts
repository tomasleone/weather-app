import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Agregar esta línea
  imports: [CommonModule, FormsModule]
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weatherData: any;
  searchQuery: string = ''; // Declaración de la propiedad searchQuery

    // Definir el objeto weatherIcons para mapear los códigos de icono a las rutas de las imágenes
    weatherIcons: { [key: string]: string } = {
      '01d': 'assets/img/clear-day.png',             // Cielo despejado durante el día
      '01n': 'assets/img/clear-night.png',           // Cielo despejado durante la noche
      '02d': 'assets/img/partly-cloudy-day.png',     // Cielo parcialmente nublado durante el día
      '02n': 'assets/img/partly-cloudy-night.png',   // Cielo parcialmente nublado durante la noche
      '03d': 'assets/img/partly-cloudy-day.png',            // Cielo nublado durante el día
      '03n': 'assets/img/partly-cloudy-night.png',          // Cielo nublado durante la noche
      '04d': 'assets/img/very-cloudy-day.png',       // Cielo muy nublado durante el día
      '04n': 'assets/img/very-cloudy-night.png',     // Cielo muy nublado durante la noche
      '09d': 'assets/img/day-rain.png',               // Lluvia ligera durante el día
      '09n': 'assets/img/night-rain.png',             // Lluvia ligera durante la noche
      '10d': 'assets/img/day-rain.png',              // Lluvia moderada durante el día
      '10n': 'assets/img/night-rain.png',           // Lluvia moderada durante la noche
      '11d': 'assets/img/day-rain.png',             // Tormentas durante el día
      '11n': 'assets/img/storm-night.png',           // Tormentas durante la noche
      '13d': 'assets/img/snow-day.png',              // Nieve durante el día
      '13n': 'assets/img/snow-night.png',            // Nieve durante la noche
      '50d': 'assets/img/mist-day.png',              // Neblina durante el día
      '50n': 'assets/img/mist-night.png',            // Neblina durante la noche
    };
    


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather('Buenos Aires'); // Cambiamos la ciudad por defecto a Buenos Aires
  }

  getWeather(city: string) {
    this.weatherService.getWeatherByCity(city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data); // Solo para verificar en la consola
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

  onSearchChange() {
    // Este método se llama cada vez que cambia el texto de búsqueda
    console.log('Texto de búsqueda:', this.searchQuery);
    // Implementar lógica para buscar sugerencias de ciudades aquí
  }

  search() {
    // Este método se llama cuando el usuario hace clic en el botón de búsqueda
    console.log('Buscando ciudad:', this.searchQuery);
    // Implementar lógica para buscar el clima de la ciudad ingresada aquí
    this.getWeather(this.searchQuery); // Llamar al método getWeather con la ciudad ingresada
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  
  convertTemperatureIfNeeded(temperature: number): number {
    if (temperature > 100) {
      // Suponemos que la temperatura está en Kelvin si es mayor a 100
      return +((temperature - 273.15).toFixed(2)); // Redondear a 2 decimales
    } else {
      // La temperatura ya está en grados Celsius
      return +temperature.toFixed(2); // Redondear a 2 decimales
    }
  }
  
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  
  
}


