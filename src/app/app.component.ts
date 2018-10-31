import { Component, ViewEncapsulation } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    asignee: {
      name: 'John Smith'
    }
  }
}
