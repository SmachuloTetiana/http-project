import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiUrl = 'https://api.apixu.com/v1/current.json?key=fa8ff3731b154ea695d212733191902&q=Lviv';
  weather: any = {};

  constructor(private http: HttpClient) {
    this.getWeather();
  }

  getWeather() {
    this.http.get(this.apiUrl).subscribe(data => {
      console.log(data);
      this.weather = data
    });
  }
}
