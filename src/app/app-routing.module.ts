import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { PlanetaDetalheComponent } from './planeta-detalhe/planeta-detalhe.component';
import { NaveEspacialComponent } from './nave-espacial/nave-espacial.component';
import { NaveEspacialDetalheComponent } from './nave-espacial-detalhe/nave-espacial-detalhe.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'personagem', component: PersonagemComponent },
  { path: 'personagem/:id', component: PersonagemDetalheComponent },
  { path: 'planeta', component: PlanetaComponent },
  { path: 'planeta/:id', component: PlanetaDetalheComponent },
  { path: 'nave', component: NaveEspacialComponent },
  { path: 'nave/:id', component: NaveEspacialDetalheComponent },
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
