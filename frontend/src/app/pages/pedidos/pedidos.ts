import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { Cliente, Pedido, Produto } from '../../models/interfaces';
import { PedidoService } from '../../services/pedido-service';
import { ClienteService } from '../../services/cliente-service';
import { ProdutoService } from '../../services/produto-service';

interface ItemModal {
  produto: Produto;
  quantidade: number;
}

@Component({
  selector: 'app-pedidos',
  imports: [FormsModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos implements OnInit {

  // arrays com dados a serem mostrados nas tabelas, com

  pedidos = signal<Pedido[]>([]);
  clientes = signal<Cliente[]>([]);
  produtos = signal<Produto[]>([]);


  // busca de pedido por nome do cliente

  busca = signal('');

  pedidosFiltrados = computed(() => {
    const termo = this.busca().toLowerCase();

    return this.pedidos().filter(pedido =>
      (pedido.clientes?.nome ?? '')
        .toLowerCase()
        .includes(termo)
    );
  });


  // =========================================================
  // MODAL DE CRIAÇÃO
  // =========================================================

  modalAberto = signal(false);
  clienteId = signal<number | null>(null);
  itensModal = signal<ItemModal[]>([]);

  clienteEncontrado = computed(() =>
    this.clientes().find(cliente =>
      cliente.id === this.clienteId()
    )
  );

  totalModal = computed(() =>
    this.itensModal().reduce(
      (total, item) => total + this.totalItem(item),
      0
    )
  );

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) {}


  ngOnInit(): void {
    this.carregarDados();
  }


  // carregamento dos dados utilizando forkJoin

  carregarDados(): void {
    forkJoin({
      pedidos: this.pedidoService.listar(),
      clientes: this.clienteService.listar(),
      produtos: this.produtoService.listar()
    }).subscribe({
      next: (res) => {
        this.pedidos.set(res.pedidos);
        this.clientes.set(res.clientes);
        this.produtos.set(res.produtos);
      },

      error: (err) => {
        console.error('Erro ao carregar pedidos:', err);
      }
    });
  }


  // exibição dos itens dos pedidos
  formatarResumoItens(pedido: Pedido): string {
    if (!pedido.itensPedido || pedido.itensPedido.length === 0) {
      return 'Nenhum item';
    }

    return pedido.itensPedido
      .map(item =>
        `${item.quantidade}x ${item.produtos?.nome || 'Produto'}`
      )
      .join(', ');
  }

  // define as classes dos diferentes status do pedido
  classeStatus(status: string): string {
    switch (status) {
      case 'pendente':
        return 'text-yellow-600';

      case 'em preparação':
        return 'text-orange-500';

      case 'pronto':
        return 'text-blue-600';

      case 'finalizado':
        return 'text-green-600';

      case 'cancelado':
        return 'text-red-500';

      default:
        return 'text-gray-500';
    }
  }


  // função para abrir o modal
  abrirModal(): void {
    this.clienteId.set(null);

    this.itensModal.set(
      this.produtos()
        .filter(produto => produto.ativo)
        .map(produto => ({
          produto,
          quantidade: 0
        }))
    );

    this.modalAberto.set(true);
  }

  //função para fechar o modal
  fecharModal(): void {
    this.modalAberto.set(false);
  }

  // função para alterar a quantidade de itens de um determinado produto
  alterarQuantidade(produtoId: number | undefined, mudanca: number): void {
    this.itensModal.update(itens =>
      itens.map(item =>
        item.produto.id === produtoId
          ? {
              ...item,
              quantidade: Math.max(
                0,
                item.quantidade + mudanca
              )
            }
          : item
      )
    );
  }

  totalItem(item: ItemModal): number {
    return Number(item.produto.preco) * item.quantidade;
  }

  enviar(): void {
    const clienteId = this.clienteId();

    const itens = this.itensModal().filter(
      item => item.quantidade > 0
    );

    if (
      !clienteId ||
      !this.clienteEncontrado() ||
      itens.length === 0
    ) {
      return;
    }

    const novoPedido = {
      cliente_id: clienteId,

      produtos: itens.map(item => ({
        produto_id: item.produto.id!,
        quantidade: item.quantidade
      }))
    };

    this.pedidoService.criar(novoPedido).subscribe({
      next: () => {
        this.fecharModal();
        this.carregarDados();
      },

      error: (err) => {
        console.error('Erro ao criar pedido:', err);
      }
    });
  }

  proximoStatus(status: string): string | null {
    switch (status) {
      case 'pendente':
        return 'em preparação';

      case 'em preparação':
        return 'pronto';

      case 'pronto':
        return 'finalizado';

      default:
        return null;
    }
  }

  avancarStatus(pedido: Pedido): void {
    const proximo = this.proximoStatus(pedido.status);

    if (!proximo) {
      return;
    }

    this.pedidoService
      .alterarStatus(Number(pedido.id), proximo)
      .subscribe({
        next: () => {
          this.carregarDados();
        },

        error: (err) => {
          console.error('Erro ao alterar status:', err);
        }
      });
  }

  cancelarPedido(pedido: Pedido): void {
    if (
      pedido.status === 'finalizado' ||
      pedido.status === 'cancelado'
    ) {
      return;
    }

    this.pedidoService
      .alterarStatus(Number(pedido.id), 'cancelado')
      .subscribe({
        next: () => {
          this.carregarDados();
        },

        error: (err) => {
          console.error('Erro ao cancelar pedido:', err);
        }
      });
  }
}