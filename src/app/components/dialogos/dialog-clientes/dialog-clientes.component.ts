import { Cliente } from './../../../models/cliente';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clientes',
  templateUrl: './dialog-clientes.component.html',
  styleUrls: ['./dialog-clientes.component.css']
})
export class DialogClientesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public cliente: Cliente) { 
    
  }

  ngOnInit(): void {
  }

}
