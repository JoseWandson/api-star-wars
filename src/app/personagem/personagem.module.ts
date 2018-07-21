import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonagemComponent } from './personagem.component';
import { PersonagemService } from './personagem.service';
import { PaginacaoModule } from '../shared/paginacao/paginacao.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    PaginacaoModule
  ],
  declarations: [PersonagemComponent],
  exports: [PersonagemComponent],
  providers: [PersonagemService]
})
export class PersonagemModule {}
