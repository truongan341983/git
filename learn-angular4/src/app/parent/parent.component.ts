import { Component, OnInit,ViewChild } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent)  mychild: ChildComponent =new ChildComponent;


addchild(){
this.mychild.value++;
}

  constructor() { }

  ngOnInit(): void {
  }

}
