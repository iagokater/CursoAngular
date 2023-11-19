import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, take, takeUntil } from 'rxjs';
import { Weather } from 'src/app/models/interfaces/weather';


@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();
  initialCityName = 'Pompeia';
  weatherDatas!: Weather;
  searchIcon = faMagnifyingGlass;

  constructor(private WeatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.WeatherService
    .getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
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

  onSubmit(): void {
   this.getWeatherDatas(this.initialCityName);
   this.initialCityName = '';
   console.log("chamou a função")
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
