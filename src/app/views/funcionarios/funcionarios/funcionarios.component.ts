import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'foto', 'cargo', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public delete(id: number): void{

  }

}
