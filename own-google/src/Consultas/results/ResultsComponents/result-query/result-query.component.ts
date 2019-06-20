import {Component, Input, OnInit} from '@angular/core';
import { ConsultaService } from '../../../service/consulta.service';
import { Doc } from './Doc';

@Component({
  selector: 'app-result-query',
  templateUrl: './result-query.component.html',
  styleUrls: ['./result-query.component.sass']
})
export class ResultQueryComponent implements OnInit {

  @Input()
  query: string;

  numberDocs: number;
  time: string;

  docs: Array<Doc>;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.consultaService.getQuery(this.query).subscribe( resultado => {
      this.numberDocs = resultado.cantidadDocumentos;
      this.time = resultado.tiempo;
      this.docs = resultado.listaDocumentos;
      // TODO: Eliminar estos console
      console.log(this.numberDocs);
      console.log(this.time);
      console.log(this.docs);
    });
  }

}
