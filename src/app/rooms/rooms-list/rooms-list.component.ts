import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  // getting data from parent
  @Input() rooms: RoomList[] = []
  @Input() title: string = ''

  // sending data to parent who has subscribed to this event
  @Output() selectedRoom = new EventEmitter<RoomList>()

  constructor(){ }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnDestroy(): void {
    console.log('On Destroy called');
  }

  ngOnInit(): void {
    
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }  

}
