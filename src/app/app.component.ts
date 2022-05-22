import { Component } from '@angular/core';
import { CurrentResponse } from './interfaces/current-response';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result?: CurrentResponse
  loading = false

  constructor(private weatherService: WeatherService) { }

  getCurrent(location: string) {
    this.loading = true

    this.weatherService.getCurrent(location).subscribe(res => {
      this.result = res.data
      this.loading = false
    })
  }
}
