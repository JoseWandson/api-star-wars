import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NaveEspacial } from '../shared/interface/nave-espacial.interface';
import { NaveEspacialDetalheService } from './nave-espacial-detalhe.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nave-espacial-detalhe',
  templateUrl: './nave-espacial-detalhe.component.html'
})
export class NaveEspacialDetalheComponent implements OnInit {

  public naveEspacial: NaveEspacial;

  constructor(
    private route: ActivatedRoute,
    private naveEspacialDetalheService: NaveEspacialDetalheService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.carregaDetalhesNaveEspacial();
  }

  public carregaDetalhesNaveEspacial(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.naveEspacialDetalheService.carregaDetalhesNaveEspacial(id).subscribe(
      (data) => {
        this.naveEspacial = data;
        this.extrairFilmes();
        this.extrairPersonagens(data.pilots);
      }
    );
  }

  private extrairFilmes(): void {
    for (let i = 0; i < this.naveEspacial.films.length; i++) {
      this.appService.extrair(this.naveEspacial.films[i]).subscribe(
        data => this.naveEspacial.films[i] = data.title
      );
    }
  }

  private extrairPersonagens(url: any[]): void {
    for (let i = 0; i < this.naveEspacial.pilots.length; i++) {
      this.appService.extrair(url[i]).subscribe(
        data => this.naveEspacial.pilots[i] = data
      );
    }
  }

}
