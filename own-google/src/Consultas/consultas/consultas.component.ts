import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ConsultaService} from '../service/consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass']
})
export class ConsultasComponent implements OnInit {

  queryForm = new FormGroup({
    query: new FormControl(''),
  });

  constructor(private queryService: ConsultaService) { }

  ngOnInit() {

  }

  buscarTerminos(): void {
    const query = this.queryForm.value.query;
    this.queryService.getQuery(query);
  }


}
