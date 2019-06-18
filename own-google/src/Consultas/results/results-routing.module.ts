import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent} from './results.component';

const routes: Routes = [
  {path: 'resultado', component: ResultsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
