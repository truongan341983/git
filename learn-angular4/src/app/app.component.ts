import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nam: String="";
  name='';
  isTrue=false;
  title1='chao mung ban den voi angular';
  hello='xin chao';
  currenStyle={color:'blue', fontSize:'50px'};
  evenStyle={color:'red',fontSize:'20px'};
  oddStyle={color:'black',fontSize:'30px'};
  curenclass={circle:!this.isTrue,square:this.isTrue};

  isshow=true;


}
