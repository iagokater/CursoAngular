import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/interfaces/weather';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Pompeia';
  weatherDatas!: Weather;

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.WeatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
}
