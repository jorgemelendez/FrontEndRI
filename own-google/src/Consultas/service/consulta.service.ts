import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../results/ResultsComponents/result-query/Result';



@Injectable({ providedIn: 'root' })
export class ConsultaService {
  consulta: any = { };
  constructor(private http: HttpClient) { }


  getLikeQuery(query: string, retroAlimentacion: []): Observable<Result> {
    this.consulta.q = query;
    this.consulta.docs = retroAlimentacion;
    console.log(JSON.stringify(this.consulta));
    const url = 'http://127.0.0.1:5000/like/' + JSON.stringify(this.consulta);
    return this.http.get<Result>(url);
  }
  getQuery(query: string): Observable<Result> {
    const url = 'http://127.0.0.1:5000/' + query;
    return this.http.get<Result>(url);
  }
  getConsultaQuery(query: string): Observable<Result> {
    const url = 'http://127.0.0.1:5000/querycheck/' + query;
    return this.http.get<Result>(url);
  }
}
