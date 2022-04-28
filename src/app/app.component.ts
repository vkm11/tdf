import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title = 'tdf';
  topics = ['Angular','React','JavaScript'];

  userModel = new User('', 'vijay@gmail.com', 8191819156, '', 'morning', true);


}
