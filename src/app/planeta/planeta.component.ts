import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';

import { RootPlaneta } from './interrface/rootPlaneta.interface';
import { PlanetaService } from './planeta.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html'
})
export class PlanetaComponent implements OnInit, OnDestroy {

  public rootPlaneta: RootPlaneta;
  public subscription: Subscription;
  public isPagination: boolean;
  public numbersPagination: Array<number>;
  public paginaAtual: number;

  constructor(
    private planetaService: PlanetaService
  ) {}

  ngOnInit() {
    this.listarPlanetas(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public listarPlanetas(pagina: number): void {
    this.subscription = this.planetaService.listarPlanetas(pagina).subscribe(
      (data) => {
        this.rootPlaneta = data;
        this.extrairId();
        this.isPagination = data.count > 10;
        if (this.isPagination) {
          this.criaArray(Math.ceil(data.count / 10));
          this.paginaAtual = pagina;
        }
      }
    );
  }

  private extrairId(): void {
    for (let i = 0; i < this.rootPlaneta.results.length; i++) {
      const id = +this.rootPlaneta.results[i].url.replace(/[^0-9]/g, '');
      this.rootPlaneta.results[i].id = id;
    }
  }

  private criaArray(value): void {
    this.numbersPagination = [];
    for (let i = 1; i <= value; i++) {
        this.numbersPagination.push(i);
      }
  }

}
