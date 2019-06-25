import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultQueryComponent } from './result-query.component';
import {MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorInicializador } from './MatPaginatorInicializador';


@NgModule({
  declarations: [
    ResultQueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  exports: [ResultQueryComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorInicializador}],
  bootstrap: [ResultQueryComponent]
})
export class ResultQueryModule { }
