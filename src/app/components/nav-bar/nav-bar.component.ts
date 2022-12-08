import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedToken } from 'src/app/models/decoded-token';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public usuario: Usuarios ={
    cpf: "00000000000",
    nome: "usuario",
    email: "teste@email.com"
  }
  constructor(
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.pegarDadosUsuarios()
  }

  public logout(): void {
    // LOGOUT
  }

  public pegarDadosUsuarios() {
    const jwt = new JwtHelperService();
    const tokenOnline:string = localStorage.getItem("token") as string
    const tokenDecoded:DecodedToken = jwt.decodeToken(tokenOnline)
    this.usuarioService.findByEmail(tokenDecoded.sub).subscribe(
      (resposta)=> {
        this.usuario = resposta
      }
    )
  }

}
