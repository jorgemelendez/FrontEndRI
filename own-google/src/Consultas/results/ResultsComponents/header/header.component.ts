import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-query',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input()
  query: string;

  ngOnInit() {
  }

}
