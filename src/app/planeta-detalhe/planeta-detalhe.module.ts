import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetaDetalheComponent } from './planeta-detalhe.component';
import { PlanetaDetalheService } from './planeta-detalhe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanetaDetalheComponent],
  exports: [PlanetaDetalheComponent],
  providers: [PlanetaDetalheService]
})
export class PlanetaDetalheModule { }
