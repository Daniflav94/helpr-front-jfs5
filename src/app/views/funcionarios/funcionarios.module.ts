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
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    FuncionariosComponent,
    NewFuncionarioComponent,
    EditFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MaskModule,
    NgxMaskModule.forChild(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ]
})
export class FuncionariosModule { }
