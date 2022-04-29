import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

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
  topicHasError = true;

  submitted = false;
  errorMsg ='';

  userModel = new User('vijay', 'vijay@gmail.com', 8191819156, 'default', 'morning', true);

  constructor(private _enrollmentServices: EnrollmentService){}
  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
    // console.log(this.userModel)

    this.submitted = true;
    this._enrollmentServices.enroll(this.userModel)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMsg = error.statusText
          
        )


  }

}
