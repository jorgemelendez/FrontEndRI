import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ResultsComponent} from './results.component';
import {ResultsRoutingModule} from './results-routing.module';
import { HeaderComponent } from './ResultsComponents/header/header.component';
import { ResultQueryModule } from './ResultsComponents/result-query/result-query.module';
import {HeaderModule} from './ResultsComponents/header/header.module';

@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    ResultsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ResultQueryModule,
    HeaderModule
  ],
  exports: [ResultsComponent],
  providers: [],
  bootstrap: [ResultsComponent]
})
export class ResultsModule {}
