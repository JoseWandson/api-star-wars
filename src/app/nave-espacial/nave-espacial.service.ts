import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootNaveEspacial } from './interface/root-nave-espacial.interface';

@Injectable({
  providedIn: 'root'
})
export class NaveEspacialService {

  constructor(
    private http: HttpClient
  ) { }

  public listarNavesEspaciais(pagina: number): Observable<RootNaveEspacial> {
    const url = `https://swapi.co/api/starships/?page=${pagina}&format=json`;

    return this.http.get<RootNaveEspacial>(url, { responseType: 'json' });
  }
}
