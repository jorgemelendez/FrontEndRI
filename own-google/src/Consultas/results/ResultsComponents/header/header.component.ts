import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultaService } from '../../../service/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-query',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  queryForm: FormGroup;

  constructor(private queryService: ConsultaService,
              private routeService: Router,
              private fb: FormBuilder) { }

  @Input()
  query: string;

  ngOnInit() {
    this.queryForm = this.fb.group({
      query: ['', []]
    });
  }

  sendQuery(): void {
    const query = this.queryForm.value.query;
    console.log(query);
    this.routeService.navigateByUrl('', {skipLocationChange: true}).then(() =>
      this.routeService.navigate(['resultado', query]));
  }

}
