import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootPersonagem } from './interface/root-personagem.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(
    private http: HttpClient
  ) {}

  public listarPersonagens(pagina: number): Observable<RootPersonagem> {
    const url = `https://swapi.co/api/people/?format=json&page=${pagina}`;

    return this.http.get<RootPersonagem>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }
}
