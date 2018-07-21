import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginacaoModule } from '../shared/paginacao/paginacao.module';
import { NaveEspacialComponent } from './nave-espacial.component';
import { NaveEspacialService } from './nave-espacial.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    PaginacaoModule
  ],
  declarations: [NaveEspacialComponent],
  exports: [NaveEspacialComponent],
  providers: [NaveEspacialService]
})
export class NaveEspacialModule { }
