import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Chuong'

  constructor() {
    console.log('This runs when component initializes.')
    this.name = 'Dang Chuong Pham'
  }
}
