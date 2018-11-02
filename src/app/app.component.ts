import { Component, ViewEncapsulation, HostListener } from '@angular/core';
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

  // @HostListener('document:keypress', ['$event']) onEnter (event: KeyboardEvent) {
  //     if (event.key == 'Enter')
  //       console.log('enter');
  // }
}
