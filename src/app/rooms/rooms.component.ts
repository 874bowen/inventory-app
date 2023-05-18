import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  // interpolation
  hotelName = 'The Hilton Hotel'
  hideRooms = false
  // property binding
  roomsList: RoomList[] = []
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  numberOfRooms = 10

  selectedRoom!: RoomList
  
  constructor() {}

  ngOnInit(): void {
    this.roomsList = [
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
  }

  toggle() {
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom(){
    const room: RoomList = {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photo: '',
        checkinTime: new Date('15-Nov-2023'),
        checkoutTime: new Date('12-Dec-2023'),
        rating: 2.5
    }
    this.roomsList = [...this.roomsList, room]
  }

}
