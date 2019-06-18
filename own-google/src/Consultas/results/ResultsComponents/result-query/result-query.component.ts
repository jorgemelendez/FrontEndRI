import {Component, Input, OnInit} from '@angular/core';
import { ConsultaService } from '../../../service/consulta.service';

@Component({
  selector: 'app-result-query',
  templateUrl: './result-query.component.html',
  styleUrls: ['./result-query.component.sass']
})
export class ResultQueryComponent implements OnInit {

  @Input()
  query: string;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.consultaService.getQuery(this.query).subscribe( resultado => {
      console.log(resultado);
    });
  }

}
