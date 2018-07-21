import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Planeta } from '../shared/interface/planeta.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetaDetalheService {

  constructor(
    private http: HttpClient
  ) {}

  public carregaDetalhesPlaneta(id: number): Observable<Planeta> {
    const url = `https://swapi.co/api/planets/${id}/?format=json`;

    return this.http.get<Planeta>(url, { responseType: 'json' });
  }
}
