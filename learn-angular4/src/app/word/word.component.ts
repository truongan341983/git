import {Component} from '@angular/core';

@Component({
  templateUrl:'./word.component.html',
  selector:'app-word',
  styleUrls:['./word.component.css']
})

export class wordcomponent{
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
name='fdfd';
showform=false;
newen='';
newvn='';
addword(){
    this.arrWords.push({
    id:this.arrWords.length+1,
    en:this.newen,
    vn:this.newvn,
    memorized:false
    });
}

removeword(id:number){
const index=this.arrWords.findIndex(e=>e.id===id);
this.arrWords.splice(index,1)
}
filterStatus='XEM_TAT_CA';
GETSHOWStatus(memorized:boolean){
const XEMTATCA=this.filterStatus==='XEM_TAT_CA';
const XEMCONHO=this.filterStatus==='XEM_DA_NHO'&& memorized;
const XEMKONHO=this.filterStatus==='XEM_DA_KHONG_NHO'&& !memorized;
return XEMTATCA || XEMCONHO||XEMKONHO;
}
}
