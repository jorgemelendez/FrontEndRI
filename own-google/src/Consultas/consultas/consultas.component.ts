import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../service/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass']
})
export class ConsultasComponent implements OnInit {

  queryForm = new FormGroup({
    query: new FormControl(''),
  });

  constructor(private queryService: ConsultaService,
              private routeService: Router) { }

  ngOnInit() {

  }

  sendQuery(): void {
    const query = this.queryForm.value.query;
    console.log(query);
    this.routeService.navigate(['resultado', query]);
  }


}
