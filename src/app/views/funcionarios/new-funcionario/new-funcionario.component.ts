import { Router } from '@angular/router';
import { Funcionario } from './../../../models/funcionario';
import { FuncionarioService } from './../../../services/funcionario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  formFuncionario: FormGroup
  isLoading: Boolean = false
  foto: string = ''

  // dados teste, após implementar Cargos alterar para linha abaixo
  // public cargos: Cargo[] = []
  public cargos: any = [{  
    idCargo: 1,
    nome: "Diretor Geral",
    descricao: "Gerencia a empresa",
    salario: 30000.0
  },
  {
    idCargo: 2,
    nome: "Diretor de Setor",
    descricao: "Gerencia um setor da empresa",
    salario: 18000.0
  },
  {
    idCargo: 4,
    nome: "Desenvolvedor Full-Stack jr",
    descricao: "Faz de tudo",
    salario: 4000.0
  } 
]

  constructor(fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private uploadService: UploadService,
    //private cargoService: CargoService
    ) {
    this.formFuncionario = fb.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
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
      funcionario.foto = this.foto
      this.funcionarioService.create(funcionario).subscribe(() => {
        alert("Funcionário cadastrado.")
        this.router.navigate(["/funcionarios"])
      })
    }else {
      alert("Dados inválidos.")
    }
    
  }

  public uploadFile(event: any): void{
    this.isLoading = true
    const file: File = event.target.files[0]
    this.uploadService.uploadFoto(file).subscribe((resposta) => {
      this.isLoading = false
      resposta.ref.getDownloadURL().then((foto: string) => {
        this.foto = foto
      })
    })
    
  }

}
