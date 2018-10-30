import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  chosenIcon;
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.isFavorite)
      this.chosenIcon = faStar
    else
      this.chosenIcon = farStar
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite)
      this.chosenIcon = faStar
    else
      this.chosenIcon = farStar
    this.change.emit();
  }

}
