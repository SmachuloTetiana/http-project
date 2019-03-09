import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl = 'https://api.apixu.com/v1/current.json?key=fa8ff3731b154ea695d212733191902&q=Lviv';
  weather: any = {};

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.getWeather();
  }

  async getWeather(): Promise<any> {
    this.weather = await this.http.get(this.apiUrl).toPromise();

    // console.log(this.weather);
    // .subscribe(data => {
    //   this.weather = data;
    //   console.log(this.weather);
    // });

    // console.log('test');

    // apiService.getDocument()
    //   .then(documents => {
    //   console.log(documents)

    //   return apiService.updateUser({documents});
    //   })
    //   .then(user => console.log(user))
    //   .catch(error => console.log(error));
  }
}
