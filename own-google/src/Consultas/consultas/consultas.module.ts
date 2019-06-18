import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConsultasComponent } from './consultas.component';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultaService } from '../service/consulta.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    ConsultasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ConsultasComponent],
  providers: [ConsultaService],
  bootstrap: [ConsultasComponent]
})

export class ConsultasModule { }
