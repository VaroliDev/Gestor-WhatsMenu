import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'clientes.cadastrar': { paramsTuple?: []; params?: {} }
    'clientes.listar_clientes': { paramsTuple?: []; params?: {} }
    'clientes.listar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'clientes.editar_cliente': { paramsTuple?: []; params?: {} }
    'clientes.deletar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'clientes.listar_clientes': { paramsTuple?: []; params?: {} }
    'clientes.listar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'clientes.listar_clientes': { paramsTuple?: []; params?: {} }
    'clientes.listar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'clientes.cadastrar': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'clientes.editar_cliente': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'clientes.deletar_cliente': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}