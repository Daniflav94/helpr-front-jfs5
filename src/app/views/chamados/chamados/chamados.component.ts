import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  isLoading: boolean = false

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  dataSource: Chamado[] = [];
 

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.isLoading = true
    this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = chamados;
      this.isLoading = false
    });
  }
}
