import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private http:HttpClient) {
  }

  text: string = "";

  getUserData(){
    this.http.get('https://localhost:7080/WeatherForecast/userData', { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.text = data;
      });
  }
}

