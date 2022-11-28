import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { NavtionbarComponent } from './navtionbar/navtionbar.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:StudentviewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    NavtionbarComponent,
    StudentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
