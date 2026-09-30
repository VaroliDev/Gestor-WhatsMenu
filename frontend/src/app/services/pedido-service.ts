import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private readonly API = 'http://localhost:3333/pedidos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.API}/listar`);
  }

  obterPorId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.API}/listar/${id}`);
  }

  criar(dados: { cliente_id: number; produtos: { produto_id: number; quantidade: number }[] }): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.API}/cadastrar`, dados);
  }

  alterarStatus(id: number, status: string): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.API}/status/${id}`, { status });
  }
}