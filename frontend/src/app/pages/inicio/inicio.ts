import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pedido } from '../../models/interfaces'

@Component({
  imports: [CommonModule],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio implements OnInit{

  carregando: boolean = false
  totalPedidos: number = 0
  totalClientes: number = 0
  totalProdutos: number = 0
  pedidosRecentes: Pedido[] = []

  ngOnInit(): void {
    
  }

  formatarResumoItens(pedido: Pedido): string{
    if (!pedido.produtos || pedido.produtos.length === 0) {
      return 'Nenhum item';
    }

    return pedido.produtos
      .map(item => `${item.quantidade}x ${item.produto?.nome || 'Produto'}`)
      .join(', ');
  }
}
