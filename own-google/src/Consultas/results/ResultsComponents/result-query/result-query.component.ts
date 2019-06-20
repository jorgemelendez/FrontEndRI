import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { ConsultaService } from '../../../service/consulta.service';
import { Doc } from './Doc';

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

  docs: Array<Doc>;

  // Columnas que se van a mostrar.
  public displayedColumns: string[];
  // Donde se van a almacenar los datos para mostrarlos.
  public dataSource = new MatTableDataSource<Doc>();
  // Paginador de la tabla
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private consultaService: ConsultaService) {
    this.displayedColumns = ['documento'];
  }

  ngOnInit() {
    this.consultaService.getQuery(this.query).subscribe( resultado => {
      this.numberDocs = resultado.cantidadDocumentos;
      this.time = resultado.tiempo;
      this.docs = resultado.listaDocumentos as Doc[];
      // TODO: Eliminar estos console
      console.log(this.numberDocs);
      console.log(this.time);
      console.log(this.docs);
      this.dataSource.data = resultado.listaDocumentos as Doc[];
    });
    // this.dataSource.data = [{link: 'link1', name: 'doc1', summary: 'resumen1'},
    // {link: 'link2', name: 'doc2', summary: 'resumen2'},
    // {link: 'link3', name: 'doc3', summary: 'resumen3'}] as Doc[];
  }

  // Metodo que se ejecuta para la vista. Pagina y Ordena.
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}