import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Cliente } from 'src/app/models/cliente';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public  formCargo: FormGroup;
  

  constructor(formBuilder: FormBuilder,
               private cargoService: CargoService,
               private router: Router
    ) {
    this.formCargo = formBuilder.group({
      nome:["",[Validators.required]],
      descricao:["",[Validators.required]],
      salario:["",[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  public create(): void{
    if(this.formCargo.valid){
        const cargo: Cargo = this.formCargo.value;
        this.cargoService.create(cargo).subscribe(response =>{
          alert("Cliente cadastrado com sucesso!");
          this.router.navigate(["/cargos"]);
        });
    }
    else {
      alert("Dados inválidos.");
    }

  }

  }
