import { Funcionario } from './../../../models/funcionario';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-funcionarios',
  templateUrl: './dialog-funcionarios.component.html',
  styleUrls: ['./dialog-funcionarios.component.css']
})
export class DialogFuncionariosComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA)
  public funcionario: Funcionario) { }

  ngOnInit(): void {
  }

}
