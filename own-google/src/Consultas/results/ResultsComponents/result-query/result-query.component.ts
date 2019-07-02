import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { ConsultaService } from '../../../service/consulta.service';
import { Doc } from './Doc';
import { NgxSpinnerService } from 'ngx-spinner';
import {ResultsComponent} from '../../results.component';


@Component({
  selector: 'app-result-query',
  templateUrl: './result-query.component.html',
  styleUrls: ['./result-query.component.sass']
})
export class ResultQueryComponent implements OnInit, AfterViewInit {

  @Input()
  query: string;
  numberDocs: number;
  time: string;
  retroalimentacion: any = {docs: []};
  consultaResultado: any = {};
  docs: Array<Doc>;
  kind: string;
  // Columnas que se van a mostrar.
  public displayedColumns: string[];
  // Donde se van a almacenar los datos para mostrarlos.
  public dataSource = new MatTableDataSource<Doc>();
  // Paginador de la tabla
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private consultaService: ConsultaService, private spinner: NgxSpinnerService, private resultsComponent: ResultsComponent) {
    this.displayedColumns = ['documento'];
  }

  showSpinner: boolean;
  noResults: boolean;



  ngOnInit() {
      this.showSpinner = true;
      this.noResults = false;
      this.consultaService.getConsultaQuery(this.query).subscribe(value => {
        this.consultaResultado = value;
        console.log(this.consultaResultado);
        if (this.consultaResultado.result) {
          this.consultaService.getQuery(this.query).subscribe(resultado => {
            this.numberDocs = resultado.cantidadDocumentos;
            resultado.listaDocumentos.forEach(val => {
              val.checked = false;
            });
            this.time = resultado.tiempo;
            this.docs = resultado.listaDocumentos as Doc[];
            this.dataSource.data = resultado.listaDocumentos as Doc[];
            this.showSpinner = false;
          });
        } else {
          this.noResults = true;
          this.showSpinner = false;
        }
      });
  }



  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  sendFeedBackQuery(event: any) {
    this.retroalimentacion.docs.splice(0, this.retroalimentacion.docs.length);
    this.dataSource.data.forEach( value => {
      if (value.checked) {
        this.retroalimentacion.docs.push(value.nombre);
      }
    });

    console.log(this.retroalimentacion.docs);
    if (this.retroalimentacion.docs.length === 0) {
      alert('Debe seleccionar documentos para realizar la retroalimentacion.');
      event.stopPropagation();
    } else {
      this.dataSource = new MatTableDataSource<Doc>();
      this.dataSource.data.splice(0, this.dataSource.data.length);
      this.showSpinner = true;
      this.consultaService.getLikeQuery(this.query, this.retroalimentacion.docs).subscribe(resultado => {
        this.numberDocs = resultado.cantidadDocumentos;
        this.time = resultado.tiempo;
        this.docs = resultado.listaDocumentos as Doc[];
        this.dataSource.data = resultado.listaDocumentos as Doc[];
        this.showSpinner = false;
        this.dataSource.paginator = this.paginator;
      });
      this.retroalimentacion.docs.splice(0, this.retroalimentacion.docs.length);
    }

  }
}
