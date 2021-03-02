import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  birthday=new Date(2018,7,25);
  person={name:"khoa",age:10};
  address=Promise.resolve('90 pham ngoc thạch');

  constructor() { }

  ngOnInit(): void {
  }

}
