import { Funcionario } from './../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  isLoading: Boolean = false

  public cargos: Cargo[] = []
  

  public cargoEmpty: any = {
    idCargo: NaN,
    nome: "",
    descricao: "",
    salario: NaN
  }

  public funcionario: Funcionario = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    cargo: this.cargoEmpty,
    foto: ""

  }

  constructor(private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadService,
    private cargoService: CargoService
    ) { }

  ngOnInit(): void {

    this.initializeFuncionario()
    this.initializeCargos()
  }

  public initializeFuncionario(): void{
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if (id != null){
      this.funcionarioService.findById(id).subscribe(funcionario => {
        this.funcionario = funcionario
      })
    }   
  }

   public initializeCargos(): void{
   this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos
   })   
  } 

  public update(form: NgForm): void{
    if (form.valid){
      const funcionarioEditado = this.funcionario
      this.funcionarioService.update(funcionarioEditado).subscribe(funcionario => {
        alert("Funcionário editado.")
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
        this.funcionario.foto = foto
      })
    })
    
  }

}
