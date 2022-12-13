import { DialogChamadosComponent } from './../../../components/dialogos/dialog-chamados/dialog-chamados.component';
import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {
  ngOnInit(): void {
    this.initializeTable();
    this.paginacao();
  }

  isLoading: boolean = false

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  chamadosList: Chamado[] = []
  dataSource!: MatTableDataSource <Chamado>
  valueStatus: string = ""


  constructor(private chamadoService: ChamadoService,
    public dialog: MatDialog
    ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


 private paginacao(): void {
  this.chamadoService.findAll().subscribe(resposta =>{
      this.chamadosList = resposta;
      if (this.paginator){
        this.dataSource.paginator = this.paginator
      }
  });
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
    this.dataSource = new MatTableDataSource(this.chamadosList)
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  limparFiltro(){
    this.dataSource.filter = ''
    this.valueStatus = ''
  }

  public openDialog(dialogo: Chamado) {
    this.dialog.open(DialogChamadosComponent, {
      width: "400px", 
      data: dialogo
    })
  }

}


  
