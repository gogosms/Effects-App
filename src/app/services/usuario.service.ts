import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?page=1&delay=8`)
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

}
