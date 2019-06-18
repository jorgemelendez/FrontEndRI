import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  query: string;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    console.log('En nuevo componente', this.route.snapshot.paramMap.get('query'));
    this.query = this.route.snapshot.paramMap.get('query');
  }

}
