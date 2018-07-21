import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemDetalheComponent } from './personagem-detalhe.component';
import { PersonagemDetalheService } from './personagem-detalhe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonagemDetalheComponent],
  exports: [PersonagemDetalheComponent],
  providers: [PersonagemDetalheService]
})
export class PersonagemDetalheModule { }
