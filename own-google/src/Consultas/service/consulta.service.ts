import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../results/ResultsComponents/result-query/Result';


@Injectable({ providedIn: 'root' })
export class ConsultaService {
  constructor(private http: HttpClient) { }


  getQuery(query: string): Observable<Result> {
    const url = 'http://127.0.0.1:5000/' + query;
    return this.http.get<Result>(url);
  }
}
