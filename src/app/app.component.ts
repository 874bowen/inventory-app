import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <div>
  //   <h1>This is an inline template</h1>
  //   <p>This a template rendered in the UI</p>
  // </div>`,
  styleUrls: ['./app.component.scss']
  // styles: [
  //   `h1 {color: red;}`
  // ]

})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin'

  constructor(@Optional() private loggerService: LoggerService, @Inject(LocalStorageToken) private localStorage: Storage) { }

  ngOnInit () {
    this.loggerService?.log('AppComponent.ngOnInit()')
    this.localStorage.setItem('name', 'Bowen Hotel')
  }

  // @ViewChild('user', { read: ViewContainerRef} ) vcr!: ViewContainerRef

  // accessing a html element using ViewChild
  // @ViewChild('name', {static: true}) name!: ElementRef
  
  // ngOnInit(): void {
  //   console.log(this.name);
  //   this.name.nativeElement.innerText = 'This is The Bowen Hotel'
  // }

  // Dynamically load a component with ViewChild
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms = 50
  // }
}
