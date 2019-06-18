import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ResultsComponent} from './results.component';
import {ResultsRoutingModule} from './results-routing.module';

@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    ResultsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ResultsComponent],
  providers: [],
  bootstrap: [ResultsComponent]
})
export class ResultsModule { }
