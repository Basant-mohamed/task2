import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  myPic = ''
  changePhoto(picNum:number){
    if(picNum == 1){
       this.myPic ="../assets/pic1.jpg"
    }
    else if(picNum == 2){
      this.myPic ="../assets/pic2.jpg"
    }
    else {

      this.myPic ="../assets/pic3.png"
    }
  }
}
