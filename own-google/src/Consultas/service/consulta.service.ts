import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Documento } from '../consultas/documento';


@Injectable({ providedIn: 'root' })
export class ConsultaService {
  constructor(private http: HttpClient) { }

}
