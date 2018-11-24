import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentsComponent} from './Students.component';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    RemoveSpacesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
