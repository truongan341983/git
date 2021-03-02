import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {wordcomponent} from './word/word.component';
import { ArrwordsComponent } from './arrwords/arrwords.component';
import { InputComponent } from './input/input.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipeCustomeComponent } from './pipe-custome/pipe-custome.component';


@NgModule({
  declarations: [
    AppComponent,
    wordcomponent,
    ArrwordsComponent,
    InputComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    PipeComponent,
    PipeCustomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
