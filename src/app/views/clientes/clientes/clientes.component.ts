import { MatTableDataSource } from '@angular/material/table';
import { Cargo } from './../../../models/cargo';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  clienteData: Cliente[] = [];
  dataSource = new MatTableDataSource<Cliente>(this.clienteData);
  isLoading: boolean = false

  constructor(private clienteService: ClienteService) { }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 //  ngAfterViewInit() {
 //    this.dataSource = new MatTableDataSource(this.clienteData)
  //  this.dataSource.paginator = this.paginator
  //}

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.isLoading = true
    this.clienteService.findAll().subscribe(resposta => {
      this.clienteData = resposta;
      this.dataSource = new MatTableDataSource(this.clienteData)
      this.isLoading = false
      if (this.paginator){
        this.dataSource.paginator = this.paginator
      }
    })

  
  }

  

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.clienteService.delete(id).subscribe(() => {
        alert("Cliente excluido.");
        this.initializeTable();
      });
    }
  }

 

}

