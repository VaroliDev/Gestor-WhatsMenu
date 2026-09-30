import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = 'http://localhost:3333/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/listar`);
  }

  obterPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/listar/${id}`);
  }

  criar(produto: Partial<Produto>): Observable<Produto> {
    return this.http.post<Produto>(`${this.API}/cadastrar`, produto);
  }

  atualizar(produto: Partial<Produto>): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/editar`, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/deletar/${id}`);
  }
}