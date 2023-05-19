import { Component, OnInit, AfterContentInit, ViewChild, AfterViewInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() { }

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
