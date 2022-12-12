import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  isLoading: boolean = false

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  dataSource!: MatTableDataSource <Chamado>;
  private chamadosList: Chamado[] = []
  valueStatus: string = ""


  constructor(private chamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.isLoading = true
    this.chamadoService.findAll().subscribe(chamados => {
      this.chamadosList = chamados
      this.dataSource = new MatTableDataSource(chamados) ;
      this.isLoading = false
      
    });
  }
  
  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.chamadosList)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterCliente(nomeCliente: string){
    this.initializeFilterCliente()
    this.dataSource.filter = nomeCliente
  }

  initializeFilterCliente(){
    this.dataSource.filterPredicate = (chamado: Chamado, filter) => {
      if(chamado.cliente.nome.toLowerCase().indexOf(filter.toLowerCase()) == -1){
        return false
      }
      return true
    }
  }

  applyFilterFuncionario(nomeFuncionario: string){
    this.initializeFilterFuncionario()
    this.dataSource.filter = nomeFuncionario
  }

  initializeFilterFuncionario(){
    this.dataSource.filterPredicate = (chamado: Chamado, filter) => {
      if(!chamado.funcionario){
        return false
      }else if(chamado.funcionario.nome.toLowerCase().indexOf(filter.toLowerCase()) == -1){
        return false
      }else{
      return true
      }
    }
  }

  applyFilterStatus(filter: string){
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  limparFiltro(){
    this.dataSource.filter = ''
  }
}


  
