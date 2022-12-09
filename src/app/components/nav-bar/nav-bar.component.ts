import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedToken } from 'src/app/models/decoded-token';
import { Tema } from 'src/app/models/tema';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public temaEscuro = false
  public tema: Tema = {
    tipo: "light_mode"
  }

  @HostBinding('class')
  get themeMode() {
    return this.temaEscuro ? 'theme-dark' : 'theme-light'
  }

  public usuario: Usuarios = {
    cpf: "00000000000",
    nome: "usuario",
    email: "teste@email.com"
  }
  constructor(
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.pegarDadosUsuarios()
    this.atualizarTema()
  }

  public logout(): void {
    // LOGOUT
  }

  public pegarDadosUsuarios() {
    const jwt = new JwtHelperService();
    const tokenOnline: string = localStorage.getItem("token") as string
    const tokenDecoded: DecodedToken = jwt.decodeToken(tokenOnline)
    this.usuarioService.findByEmail(tokenDecoded.sub).subscribe(
      (resposta) => {
        this.usuario = resposta
      }
    )
  }

  public alterarTema() {
    this.temaEscuro = !this.temaEscuro
    if (this.temaEscuro == true) {
      localStorage.setItem('tema', 'true')
      this.tema.tipo = "light_mode"
    } else {
      localStorage.setItem('tema', 'false')
      this.tema.tipo = "dark_mode"
    }
  }

  public atualizarTema() {
    const storage = localStorage.getItem('tema')
    if (storage == "false" || storage == undefined) {
      this.temaEscuro = false
    } else {
      this.temaEscuro = true
    }
  }
}
