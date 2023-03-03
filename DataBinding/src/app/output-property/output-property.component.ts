import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input() value: number = 0;
  @Output() valueChanged = new EventEmitter();

  @ViewChild('inputTag') inputTagValue: ElementRef; // it works but i don't know how to initialize this

  increment(){
    this.inputTagValue.nativeElement.value++;
    this.valueChanged.emit({newValue: this.value});
  }
  decrement(){
    this.inputTagValue.nativeElement.value--;
    this.valueChanged.emit({newValue: this.value});
  }

}
