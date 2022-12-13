import { Cargo } from './../../../models/cargo';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cargos',
  templateUrl: './dialog-cargos.component.html',
  styleUrls: ['./dialog-cargos.component.css']
})
export class DialogCargosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public cargo: Cargo) { }

  ngOnInit(): void {
  }

}
