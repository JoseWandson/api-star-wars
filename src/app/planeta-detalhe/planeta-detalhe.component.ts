import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Planeta } from '../shared/interface/planeta.interface';
import { PlanetaDetalheService } from './planeta-detalhe.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-planeta-detalhe',
  templateUrl: './planeta-detalhe.component.html'
})
export class PlanetaDetalheComponent implements OnInit {

  public planeta: Planeta;

  constructor(
    private route: ActivatedRoute,
    private planetaDetalheService: PlanetaDetalheService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.carregaDetalhesPlaneta();
  }

  public carregaDetalhesPlaneta(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.planetaDetalheService.carregaDetalhesPlaneta(id).subscribe(
      (data) => {
        this.planeta = data;
        this.extrairPersonagens(data.residents);
        this.extrairFilmes();
      }
    );
  }

  private extrairPersonagens(url: any[]): void {
    for (let i = 0; i < this.planeta.residents.length; i++) {
      this.appService.extrair(url[i]).subscribe(
        data => this.planeta.residents[i] = data
      );
    }
  }

  private extrairFilmes(): void {
    for (let i = 0; i < this.planeta.films.length; i++) {
      this.appService.extrair(this.planeta.films[i]).subscribe(
        data => this.planeta.films[i] = data.title
      );
    }
  }

}
