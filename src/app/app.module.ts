import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PersonagemModule } from './personagem/personagem.module';
import { PersonagemDetalheModule } from './personagem-detalhe/personagem-detalhe.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginacaoModule } from './shared/paginacao/paginacao.module';
import { PlanetaModule } from './planeta/planeta.module';
import { PlanetaDetalheModule } from './planeta-detalhe/planeta-detalhe.module';
import { AppService } from './app.service';
import { NaveEspacialModule } from './nave-espacial/nave-espacial.module';
import { NaveEspacialDetalheModule } from './nave-espacial-detalhe/nave-espacial-detalhe.module';

@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    PersonagemModule,
    PersonagemDetalheModule,
    PaginacaoModule,
    PlanetaModule,
    PlanetaDetalheModule,
    NaveEspacialModule,
    NaveEspacialDetalheModule
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
