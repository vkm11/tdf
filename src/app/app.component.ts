import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'tdf';
  topics = ['Angular','React','JavaScript'];

  userModel = new User('Vijay', 'vijay@gmail.com', 8191819156, '', 'morning', true);


}
