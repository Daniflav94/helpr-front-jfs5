import { Router } from '@angular/router';
import { Funcionario } from './../../../models/funcionario';
import { FuncionarioService } from './../../../services/funcionario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  formFuncionario: FormGroup
  // dados teste, após implementar Cargos alterar para linha abaixo
  // public cargos: Cargo[] = []
  public cargos: any = [{  
    idCargo: 1,
    nome: "Diretor Geral",
    descricao: "Gerencia a empresa",
    salario: 30000.0
  }]

  constructor(fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router,
    //private cargoService: CargoService
    ) {
    this.formFuncionario = fb.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
      foto: [""]
    })
   }

  ngOnInit(): void {
    //this.initializeFieldCargos()
  }

  // Após implementar service e métodos de Cargo descomentar método abaixo

  /* private initializeFieldCargos(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos;
    });
  } */

  public create(): void{
    if(this.formFuncionario.valid){
      const funcionario: Funcionario = this.formFuncionario.value
      this.funcionarioService.create(funcionario).subscribe(() => {
        alert("Funcionário cadastrado.")
        this.router.navigate(["/funcionarios"])
      })
    }else {
      alert("Dados inválidos.")
    }
    
  }

}
