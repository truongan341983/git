import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arrperson=[
    {name:'Tí', age:'18'},
    {name:'Tèo', age:'15'},
    {name:'Tuấn', age:'14'}
  ];
}
