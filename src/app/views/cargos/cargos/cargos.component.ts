import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario'];
  dataSource: Cargo[] = [];
  isLoading: Boolean = false

  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }
 private initializeTable(): void{
  this.isLoading = true
  this.cargoService.findAll().subscribe(cargos =>{
      this.dataSource = cargos;
      this.isLoading = false
  });
  }
 }

