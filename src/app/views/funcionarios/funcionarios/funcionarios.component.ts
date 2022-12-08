import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'foto', 'cargo', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(){
    this.funcionarioService.findAll().subscribe(resposta => {
      this.dataSource = resposta
    })
  }

  public delete(id: number): void{
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(id).subscribe(resposta  => {
        alert("Funcionário excluído.")
        this.initializeTable()
      })
    }
  }

}
