import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'clientes.teste': { paramsTuple?: []; params?: {} }
    'clientes.cadastrar': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'clientes.teste': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'clientes.teste': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'clientes.cadastrar': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}