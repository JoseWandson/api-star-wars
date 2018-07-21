import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootPlaneta } from './interrface/rootPlaneta.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  constructor(
    private http: HttpClient
  ) {}

  public listarPlanetas(pagina: number): Observable<RootPlaneta> {
    const url = `https://swapi.co/api/planets/?page=${pagina}&format=json`;

    return this.http.get<RootPlaneta>(url, { responseType: 'json' });
  }
}
