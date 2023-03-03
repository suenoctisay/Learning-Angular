import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 5;

  deleteCycle: boolean = false;

  changeValue(){
    this.value++;
  }

  destroyCycle(){
    this.deleteCycle = true;
  }
}
