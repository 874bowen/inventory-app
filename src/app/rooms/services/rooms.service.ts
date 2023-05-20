import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: '',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Dec-2023'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: '',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Dec-2023'),
      rating: 2.5
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: '',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Dec-2023'),
      rating: 5
    },
    {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: '',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Dec-2023'),
      rating: 3.2
    },
  ]
  constructor() {
    // one instance of this service not multiple, what if you want a different instance say for Employee? Pass the providers to employee
    console.log("Room Service initialized");
  }

  getRooms() {
    return this.roomsList
  }
}
