import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultQueryComponent } from './result-query.component';


@NgModule({
  declarations: [
    ResultQueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ResultQueryComponent],
  providers: [],
  bootstrap: [ResultQueryComponent]
})
export class ResultQueryModule { }
