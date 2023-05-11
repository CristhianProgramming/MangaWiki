import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

ramdomNumero(){
  let RANDOM =(Math.random() * 999).toString().slice(0,3);
  return RANDOM;
}

}
