import { Component, OnInit, Self, SkipSelf, Host } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // you want a different instance for this
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  employee: string = 'Mitchell';

  constructor(@Host() private roomsService: RoomsService) {  }

  ngOnInit(): void {
    
  }

}
