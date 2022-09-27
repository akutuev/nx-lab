import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Game } from '@bg-hoard/libs/api/util-interface';
import { formatRating } from '@bg-hoard/libs/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formatRating = formatRating;

  title = 'Board Game Hoard';
  games = this.http.get<Game[]>('/api/games')

  constructor(private http: HttpClient) {
    console.log("component constructed")
  }
}