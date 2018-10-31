import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  chosenIcon;
  @Input('is-favorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  ngOnInit() {
    if (this.isSelected)
      this.chosenIcon = faStar
    else
      this.chosenIcon = farStar
  }

  onClick(){
    this.isSelected = !this.isSelected;
    if (this.isSelected)
      this.chosenIcon = faStar
    else
      this.chosenIcon = farStar
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}