import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/libs/store/util-formatters';
import { getAllGames } from '../fake-api';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formatRating = formatRating;

  title = 'Board Game Hoard';
  games = getAllGames();
}