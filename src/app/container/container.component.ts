import { Component, OnInit, AfterContentInit, ViewChild, AfterViewInit, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor(@Host() private roomService: RoomsService) { }

  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  ngOnInit() {
    // console.log(this.employeeComponent);
  }


  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    console.log(this.employeeComponent);
    this.employeeComponent.employee = "Bowen"
  }

}
