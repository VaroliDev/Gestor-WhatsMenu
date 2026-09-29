/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  clientes: {
    cadastrarCliente: typeof routes['clientes.cadastrar_cliente']
    listarClientes: typeof routes['clientes.listar_clientes']
    listarCliente: typeof routes['clientes.listar_cliente']
    editarCliente: typeof routes['clientes.editar_cliente']
    deletarCliente: typeof routes['clientes.deletar_cliente']
  }
  produtos: {
    cadastrarProduto: typeof routes['produtos.cadastrar_produto']
    listarProdutos: typeof routes['produtos.listar_produtos']
    listarProduto: typeof routes['produtos.listar_produto']
    editarProduto: typeof routes['produtos.editar_produto']
    deletarProduto: typeof routes['produtos.deletar_produto']
  }
  pedidos: {
    criarPedido: typeof routes['pedidos.criar_pedido']
    listarPedidos: typeof routes['pedidos.listar_pedidos']
    buscarPedido: typeof routes['pedidos.buscar_pedido']
    alterarStatus: typeof routes['pedidos.alterar_status']
  }
}
