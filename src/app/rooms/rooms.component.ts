import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  // interpolation
  hotelName = 'The Hilton Hotel'
  hideRooms = true
  // property binding
  roomsList: RoomList[] = []
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  numberOfRooms = 10

  title = 'Hotel Rooms List'

  selectedRoom!: RoomList
  
  // , {static: true } second parameter to ViewChild decorator
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  // @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  // roomService = new RoomsService() -- do not do this

  constructor(private roomsService: RoomsService) {}

  ngAfterViewInit(): void {
     this.headerComponent.title = 'Rooms List Header'
  
    // this.headerChildrenComponent.forEach((headerComponent:HeaderComponent) => {
    //   headerComponent.title="This is the Title"
    // })
  }

  ngAfterViewChecked(): void {
    // rarely used
    // this.headerComponent.title = 'Rooms List Header'
  }

  ngDoCheck(): void {
    console.log('Do check called')
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomsList = this.roomsService.getRooms()
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = 'Rooms List Title Updated'
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
