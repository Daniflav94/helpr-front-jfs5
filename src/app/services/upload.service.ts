import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: AngularFireStorage) { }

  public uploadFoto(foto: File): Observable<any>{
    const promise = this.storage.upload(`fotos/${Date.now()}`, foto)
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao fazer upload")
        console.error(error)
        return EMPTY
      })
    )
  }
}

