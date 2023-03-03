import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  url: string ='https://github.com/suenoctisay';
  img: string ='https://br.web.img2.acsta.net/pictures/17/12/12/11/42/3534594.jpg';

  inputValue: string='';
  valueSaved: string='';
  isMOuseOver: boolean=false;

  name: string='Suelen Santos';
  person: any = {
    name: 'Suelen',
    yearsOld: '20'
  }

  courseName: string = 'Angular';
  initialValue: number = 15;

  getValue(){
    return 1;
  }

  clickBtn(){
    alert('you clicked the button');
  }

  onKeyUp(event: KeyboardEvent){
    this.inputValue = ((<HTMLInputElement>event.target).value);
  }

  saveValue(value: string){
    this.valueSaved = value;
  }

  onMouseOverOut(){
    this.isMOuseOver = !this.isMOuseOver;
  }

  onValueChanged(event: any){
    console.log(event.newValue);
  }
}
