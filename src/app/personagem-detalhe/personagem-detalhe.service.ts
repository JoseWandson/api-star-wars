import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Personagem } from '../shared/interface/personagem.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonagemDetalheService {

  constructor(
    private http: HttpClient
  ) {}

  public carregaDetalhesPersonagem(id: number): Observable<Personagem> {
    const url = `https://swapi.co/api/people/${id}/?format=json`;

    return this.http.get<Personagem>(url,
      { responseType: 'json' }
    );
  }
}
