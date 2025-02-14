import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CargosComponent,
    NewCargoComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    ComponentsModule, //Exporta a navbar
    MaterialModule, //Exporta o material
    ReactiveFormsModule
  ]
})
export class CargosModule { }
