import { DialogCargosComponent } from './../../../components/dialogos/dialog-cargos/dialog-cargos.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario','detalhe'];
  cargoData: Cargo[] = [];
  dataSource = new MatTableDataSource<Cargo>(this.cargoData);
  isLoading: Boolean = false

  constructor(private cargoService: CargoService,
    public dialog: MatDialog ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.initializeTable();
  }


 private initializeTable(): void{
  this.isLoading = true
  this.cargoService.findAll().subscribe(cargos =>{
      this.cargoData = cargos;
      this.dataSource = new MatTableDataSource(this.cargoData)
      this.isLoading = false
      if (this.paginator){
        this.dataSource.paginator = this.paginator
      }
  });
  }
  public openDialog(cargo: Cargo) {
    this.dialog.open(DialogCargosComponent, {
      width: "400px", 
      data: cargo
    })
 }
}
