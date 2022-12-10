import { Router } from '@angular/router';
import { Funcionario } from './../../../models/funcionario';
import { FuncionarioService } from './../../../services/funcionario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  formFuncionario: FormGroup
  isLoading: Boolean = false
  foto: string = ''

  public cargos: Cargo[] = []
 
  constructor(fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private uploadService: UploadService,
    private cargoService: CargoService
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
    this.initializeFieldCargos()
  }


  public initializeFieldCargos(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos;
    });
  } 

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
