import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NaveEspacial } from '../shared/interface/nave-espacial.interface';

@Injectable({
  providedIn: 'root'
})
export class NaveEspacialDetalheService {

  constructor(
    private http: HttpClient
  ) {}

  public carregaDetalhesNaveEspacial(id: number): Observable<NaveEspacial> {
    const url = `https://swapi.co/api/starships/${id}/?format=json`;

    return this.http.get<NaveEspacial>(url, { responseType: 'json' });
  }
}
