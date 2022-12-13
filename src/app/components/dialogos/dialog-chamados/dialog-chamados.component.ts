import { Funcionario } from 'src/app/models/funcionario';
import { Cliente } from 'src/app/models/cliente';
import { Chamado } from './../../../models/chamado';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-chamados',
  templateUrl: './dialog-chamados.component.html',
  styleUrls: ['./dialog-chamados.component.css']
})
export class DialogChamadosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public chamado: Chamado,
  @Inject(MAT_DIALOG_DATA)
  public cliente: Cliente,
  @Inject(MAT_DIALOG_DATA)
  public funcionario: Funcionario) {}

  ngOnInit(): void {
  }

}
