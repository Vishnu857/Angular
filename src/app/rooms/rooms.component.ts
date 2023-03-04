import { Component } from '@angular/core';
import { rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  
  hotelname="Hilton hotel";
  noofrooms=30;
  hiderooms=false;
  rooms:rooms={
    totalrooms: 30,
    availablerooms: 10,
    bookedrooms: 15,
  };
  toggle(){
    this.hiderooms=!this.hiderooms;
  }
}
