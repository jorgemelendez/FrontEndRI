import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass']
})
export class ConsultasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  buscarTerminos(): void {
    console.log('Buscar terminos');
  }


}
