import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'clientes.cadastrar_cliente': { paramsTuple?: []; params?: {} }
    'clientes.listar_clientes': { paramsTuple?: []; params?: {} }
    'clientes.listar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'clientes.editar_cliente': { paramsTuple?: []; params?: {} }
    'clientes.deletar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produtos.cadastrar_produto': { paramsTuple?: []; params?: {} }
    'produtos.listar_produtos': { paramsTuple?: []; params?: {} }
    'produtos.listar_produto': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produtos.editar_produto': { paramsTuple?: []; params?: {} }
    'produtos.deletar_produto': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pedidos.criar_pedido': { paramsTuple?: []; params?: {} }
    'pedidos.listar_pedidos': { paramsTuple?: []; params?: {} }
    'pedidos.buscar_pedido': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pedidos.alterar_status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'clientes.cadastrar_cliente': { paramsTuple?: []; params?: {} }
    'produtos.cadastrar_produto': { paramsTuple?: []; params?: {} }
    'pedidos.criar_pedido': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'clientes.listar_clientes': { paramsTuple?: []; params?: {} }
    'clientes.listar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produtos.listar_produtos': { paramsTuple?: []; params?: {} }
    'produtos.listar_produto': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pedidos.listar_pedidos': { paramsTuple?: []; params?: {} }
    'pedidos.buscar_pedido': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'clientes.listar_clientes': { paramsTuple?: []; params?: {} }
    'clientes.listar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produtos.listar_produtos': { paramsTuple?: []; params?: {} }
    'produtos.listar_produto': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pedidos.listar_pedidos': { paramsTuple?: []; params?: {} }
    'pedidos.buscar_pedido': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'clientes.editar_cliente': { paramsTuple?: []; params?: {} }
    'produtos.editar_produto': { paramsTuple?: []; params?: {} }
    'pedidos.alterar_status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'clientes.deletar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produtos.deletar_produto': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}