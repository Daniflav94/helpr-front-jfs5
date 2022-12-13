import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DialogChamadosComponent } from './dialogos/dialog-chamados/dialog-chamados.component';
import { DialogClientesComponent } from './dialogos/dialog-clientes/dialog-clientes.component';
import { DialogCargosComponent } from './dialogos/dialog-cargos/dialog-cargos.component';
import { DialogFuncionariosComponent } from './dialogos/dialog-funcionarios/dialog-funcionarios.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DialogChamadosComponent,
    DialogClientesComponent,
    DialogCargosComponent,
    DialogFuncionariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
