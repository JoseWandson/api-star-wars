import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonagemDetalheService } from './personagem-detalhe.service';
import { Personagem } from '../shared/interface/personagem.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html'
})
export class PersonagemDetalheComponent implements OnInit {

  public personagem: Personagem;

  constructor(
    private route: ActivatedRoute,
    private personagemDetalheService: PersonagemDetalheService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.carregaDetalhesPersonagem();
  }

  public carregaDetalhesPersonagem(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.personagemDetalheService.carregaDetalhesPersonagem(id).subscribe(
      (data) => {
        this.personagem = data;
        this.extrairPlanetaNatal(data.homeworld);
        this.extrairFilmes();
        this.extrairEspecies();
        this.extrairVeiculos();
        this.extrairNaves(data.starships);
      }
    );
  }

  private extrairPlanetaNatal(url: any): void {
    this.appService.extrair(url).subscribe(
      data => this.personagem.homeworld = data
    );
  }

  private extrairFilmes(): void {
    for (let i = 0; i < this.personagem.films.length; i++) {
      this.appService.extrair(this.personagem.films[i]).subscribe(
        data => this.personagem.films[i] = data.title
      );
    }
  }

  private extrairEspecies(): void {
    if (this.personagem.species.length > 0) {
      this.appService.extrair(this.personagem.species[0]).subscribe(
        data => this.personagem.species = data
      );
    }
  }

  private extrairVeiculos(): void {
    for (let i = 0; i < this.personagem.vehicles.length; i++) {
      this.appService.extrair(this.personagem.vehicles[i]).subscribe(
        data => this.personagem.vehicles[i] = data
      );
    }
  }

  private extrairNaves(url: any): void {
    for (let i = 0; i < this.personagem.starships.length; i++) {
      this.appService.extrair(url).subscribe(
        data => this.personagem.starships[i] = data.name
      );
    }
  }

}
