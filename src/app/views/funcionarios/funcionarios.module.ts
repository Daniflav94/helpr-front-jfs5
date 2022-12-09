import { MaskModule } from 'src/app/shared/mask/mask.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    FuncionariosComponent,
    NewFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MaskModule,
    NgxMaskModule.forChild()
  ]
})
export class FuncionariosModule { }
