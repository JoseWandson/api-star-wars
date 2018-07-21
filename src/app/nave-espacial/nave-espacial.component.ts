import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NaveEspacialService } from './nave-espacial.service';
import { RootNaveEspacial } from './interface/root-nave-espacial.interface';

@Component({
  selector: 'app-nave-espacial',
  templateUrl: './nave-espacial.component.html'
})
export class NaveEspacialComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public isPagination: boolean;
  public numbersPagination: Array<number>;
  public paginaAtual: number;
  public rootNaveEspacial: RootNaveEspacial;

  constructor(
    private naveEspacialService: NaveEspacialService
  ) {}

  ngOnInit() {
    this.listarNavesEspaciais(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public listarNavesEspaciais(pagina: number): void {
    this.subscription = this.naveEspacialService.listarNavesEspaciais(pagina).subscribe(
      (data) => {
        this.rootNaveEspacial = data;
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
    for (let i = 0; i < this.rootNaveEspacial.results.length; i++) {
      const id = +this.rootNaveEspacial.results[i].url.replace(/[^0-9]/g, '');
      this.rootNaveEspacial.results[i].id = id;
    }
  }

}
