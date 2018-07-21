import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RootPersonagem } from './interface/root-personagem.interface';
import { PersonagemService } from './personagem.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html'
})
export class PersonagemComponent implements OnInit, OnDestroy {

  public rootPersonagem: RootPersonagem;
  public subscription: Subscription;
  public isPagination: boolean;
  public numbersPagination: Array<number>;
  public paginaAtual: number;

  constructor(
    private personagemService: PersonagemService
  ) {}

  ngOnInit() {
    this.listarPersonagens(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public listarPersonagens(pagina: number): void {
    this.subscription = this.personagemService.listarPersonagens(pagina).subscribe(
      (data) => {
        this.rootPersonagem = data;
        this.extrairId();
        this.isPagination = data.count > 10;
        if (this.isPagination) {
          this.criaArray(Math.ceil(data.count / 10));
          this.paginaAtual = pagina;
        }
      }
    );
  }

  private criaArray(value): void {
    this.numbersPagination = [];
    for (let i = 1; i <= value; i++) {
        this.numbersPagination.push(i);
      }
  }

  private extrairId(): void {
    for (let i = 0; i < this.rootPersonagem.results.length; i++) {
      const id = +this.rootPersonagem.results[i].url.replace(/[^0-9]/g, '');
      this.rootPersonagem.results[i].id = id;
    }
  }

}
