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
    this.consultaService.getQuery(this.query).subscribe( resultado => {
      console.log(resultado);
      if (resultado.cantidadDocumentos !== 0) {
        this.showSpinner = false;
        this.numberDocs = resultado.cantidadDocumentos;
        this.time = resultado.tiempo;
        this.docs = resultado.listaDocumentos as Doc[];
        this.dataSource.data = resultado.listaDocumentos as Doc[];
      } else {
        this.showSpinner = false;
        this.noResults = true;
      }

    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  retroAlimentar(val: string) {
    if (this.retroalimentacion.docs.indexOf(val) >= 0) {
      this.retroalimentacion.docs.splice(this.retroalimentacion.docs.indexOf(val), 1);
    } else {
      this.retroalimentacion.docs.push(val);
    }
    console.log(this.retroalimentacion.docs);
  }

  sendFeedBackQuery(event: any) {
    if (this.retroalimentacion.docs.length === 0) {
      alert('Debe seleccionar documentos para realizar la retroalimentacion.');
      event.stopPropagation();
    } else {
      this.dataSource = new MatTableDataSource<Doc>();
      this.dataSource.data.splice(0, this.dataSource.data.length);
      console.log(this.dataSource.data.length);
      this.consultaService.getLikeQuery(this.query, this.retroalimentacion.docs).subscribe(resultado => {
        this.numberDocs = resultado.cantidadDocumentos;
        this.time = resultado.tiempo;
        this.docs = resultado.listaDocumentos as Doc[];
        this.dataSource.data = resultado.listaDocumentos as Doc[];
      });
      this.retroalimentacion.docs.splice(0, this.retroalimentacion.docs.length);
    }

  }
}
