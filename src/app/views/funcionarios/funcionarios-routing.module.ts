import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  { 
    path: '', 
    component: FuncionariosComponent 
  },
  {
    path: 'new',
    component: NewFuncionarioComponent 
  },
  {
    path: 'edit/:id',
    component: EditFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
