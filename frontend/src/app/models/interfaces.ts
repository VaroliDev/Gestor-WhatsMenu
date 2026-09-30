export interface Cliente {
  id?: number;
  nome: string;
  telefone: string;
}

export interface Produto {
  id?: number;
  nome: string;
  preco: number | string;
  ativo: boolean;
}

export interface ItemPedido {
  id?: number;
  produtoId: number;
  quantidade: number;
  precoUnitario?: number | string;
  precoTotal?: number | string;
  produtos?: Produto;
}

export interface Pedido {
  id?: number;
  clienteId: number;
  clientes?: Cliente;
  status: 'pendente' | 'em preparação' | 'pronto' | 'finalizado' | 'cancelado';
  valorTotal: number | string;
  criadoEm?: string;
  itensPedido: ItemPedido[];
}