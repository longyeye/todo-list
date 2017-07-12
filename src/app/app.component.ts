import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  //template: `
  //<h1>
  //Welcome to {{title}}!!
  //</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'todo';
  private title: string = 'app works!';
}
