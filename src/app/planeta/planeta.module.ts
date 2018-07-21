import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginacaoModule } from '../shared/paginacao/paginacao.module';
import { PlanetaComponent } from './planeta.component';
import { PlanetaService } from './planeta.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    PaginacaoModule
  ],
  declarations: [PlanetaComponent],
  exports: [PlanetaComponent],
  providers: [PlanetaService]
})
export class PlanetaModule { }
