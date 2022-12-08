import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
    
  ) { }

  public findByEmail(email: string): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${API_CONFIG.baseUrl}/usuarios/${email}/email`).pipe(
      catchError(error => {
        alert(error)
        console.error(error)
        return EMPTY
      })
    )
  }




}
