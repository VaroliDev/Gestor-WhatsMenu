import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'http://localhost:3333/clientes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.API}/listar`);
  }

  obterPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/listar/${id}`);
  }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API}/cadastrar`, cliente);
  }

  // Como a rota /clientes/editar não recebe o ID na URL, enviamos o objeto completo no body
  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/editar`, cliente);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/deletar/${id}`);
  }
}