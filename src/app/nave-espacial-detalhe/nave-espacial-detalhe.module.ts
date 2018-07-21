import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaveEspacialDetalheComponent } from './nave-espacial-detalhe.component';
import { NaveEspacialDetalheService } from './nave-espacial-detalhe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaveEspacialDetalheComponent],
  exports: [NaveEspacialDetalheComponent],
  providers: [NaveEspacialDetalheService]
})
export class NaveEspacialDetalheModule { }
