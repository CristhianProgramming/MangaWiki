import { Component, Input } from '@angular/core';
import { Datum } from '../../interfaces/Kitsu.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() anime! : Datum ;
  @Input() color! : string;
}
