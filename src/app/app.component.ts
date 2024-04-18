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
  
  
}


