export interface Cliente {
    id: number
    nome: string
    telefone: string
}

export interface Produto {
    id: number
    nome: string
    preco: number
    ativo: boolean
}

export interface ItemPedido {
    produtoId: number
    quantidade: number
    precoUnitario: number
    totalItem: number
    produto: Produto
}

export interface Pedido {
    id: number
    clienteId: number
    cliente: Cliente
    status: 'pendente' | 'em preparação' | 'pronto' | 'finalizado' | 'cancelado'
    valorTotal: number;
    criadoEm: string
    produtos: ItemPedido[]
}