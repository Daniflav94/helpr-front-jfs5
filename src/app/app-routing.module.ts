import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoClienteGuard } from './guards/acesso-cliente.guard';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    canActivateChild: [ AcessoClienteGuard ]
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivateChild: [ AcessoClienteGuard ]
  },
  { 
    path: 'funcionarios', 
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule) 
  },

  { 
    path: 'cargos', loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
