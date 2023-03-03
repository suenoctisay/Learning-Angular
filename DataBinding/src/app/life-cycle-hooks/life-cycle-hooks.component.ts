import { Component,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent { // it doesn't implement the methods (hooks)

  @Input() initialValue: number = 11;

  constructor(){
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit(){
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  AfterContentInit(){
    this.log('AfterContentInit');
  }

  AfterContentChecked(){
    this.log('AfterContentChecked');
  }

  AfterViewInit(){
    this.log('AfterViewInit');
  }

  AfterViewChecked(){
    this.log('AfterViewChecked');
  }

  OnDestroy(){
    this.log('OnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }
}
