import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['foto', 'nome', 'cpf', 'email', 'cargo', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];
  isLoading: boolean = false

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(){
    this.isLoading = true
    this.funcionarioService.findAll().subscribe(resposta => {
      this.dataSource = resposta
      this.isLoading = false
    })
  }

  public delete(id: number, foto: string): void{
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(id, foto).subscribe(resposta  => {
        alert("Funcionário excluído.")
        this.initializeTable()
      })
    }
  }

}
