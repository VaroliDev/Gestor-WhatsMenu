/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  clientes: {
    cadastrar: typeof routes['clientes.cadastrar']
    listarClientes: typeof routes['clientes.listar_clientes']
    listarCliente: typeof routes['clientes.listar_cliente']
    editarCliente: typeof routes['clientes.editar_cliente']
    deletarCliente: typeof routes['clientes.deletar_cliente']
  }
}
