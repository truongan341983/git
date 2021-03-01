import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrwords',
  templateUrl: './arrwords.component.html',
  styleUrls: ['./arrwords.component.css']
})
export class ArrwordsComponent implements OnInit {

  arrsubject=['angylar','react','vu'];
  newen='';
  newviet='';

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
  constructor() { }

  ngOnInit(): void {
  }

  addword(){
    this.arrWords.unshift({
      id:this.arrWords.length+1,
      en:this.newen,
      vn:this.newviet,
      memorized:false
    });
    this.newen='';
    this.newviet='';
    this.isshowform=false;
  }
  isshowform=false;

}
