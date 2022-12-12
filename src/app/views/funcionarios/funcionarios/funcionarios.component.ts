import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['foto', 'nome', 'cpf', 'email', 'cargo', 'editar', 'excluir'];
  funcionarioData: Funcionario[] = [];
  dataSource = new MatTableDataSource<Funcionario>(this.funcionarioData);
  isLoading: boolean = false

  constructor(private funcionarioService: FuncionarioService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(){
    this.isLoading = true
    this.funcionarioService.findAll().subscribe(resposta => {
      this.funcionarioData = resposta
      this.dataSource = new MatTableDataSource(this.funcionarioData)
      this.isLoading = false
      if (this.paginator){
        this.dataSource.paginator = this.paginator
      }
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

  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.funcionarioData)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterCargo(nomeCargo: string){
    this.initializeFilterCliente()
    this.dataSource.filter = nomeCargo
  }

  initializeFilterCliente(){
    this.dataSource.filterPredicate = (funcionario: Funcionario, filter) => {
      if(funcionario.cargo.nome.toLowerCase().indexOf(filter.toLowerCase()) == -1){
        return false
      }
      return true
    }
  }

}
