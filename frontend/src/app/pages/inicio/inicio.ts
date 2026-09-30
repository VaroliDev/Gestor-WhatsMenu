import { Component, OnInit, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { forkJoin } from 'rxjs'

import { Cliente, Pedido, Produto } from '../../models/interfaces'
import { PedidoService } from '../../services/pedido-service'
import { ClienteService } from '../../services/cliente-service'
import { ProdutoService } from '../../services/produto-service'

@Component({
  imports: [CommonModule],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio implements OnInit {
  totalPedidos = signal(0)
  totalClientes = signal(0)
  totalProdutos = signal(0)
  pedidosRecentes = signal<Pedido[]>([])

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregarDados()
  }

  carregarDados(): void {

    forkJoin({
      pedidos: this.pedidoService.listar(),
      clientes: this.clienteService.listar(),
      produtos: this.produtoService.listar()
    }).subscribe({
      next: (res) => {
        const pedidosArray = res.pedidos
        const clientesArray = res.clientes
        const produtosArray = res.produtos

        this.totalPedidos.set(pedidosArray.length)
        this.totalClientes.set(clientesArray.length)
        this.totalProdutos.set(produtosArray.length)
        this.pedidosRecentes.set([...pedidosArray].slice(0, 5))
      },
      error: (err) => {
        console.error('Erro ao carregar dados do inicio:', err)
      }
    })
  }

  formatarResumoItens(pedido: Pedido): string {
    if (!pedido.itensPedido || pedido.itensPedido.length === 0) {
      return 'Nenhum item'
    }

    return pedido.itensPedido
      .map(item => `${item.quantidade}x ${item.produtos?.nome || 'Produto'}`)
      .join(', ')
  }
}