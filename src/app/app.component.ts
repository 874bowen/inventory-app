import { Component } from '@angular/core';

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
}
