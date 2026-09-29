/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'clientes.cadastrar': {
    methods: ["POST"],
    pattern: '/clientes/cadastrar',
    tokens: [{"old":"/clientes/cadastrar","type":0,"val":"clientes","end":""},{"old":"/clientes/cadastrar","type":0,"val":"cadastrar","end":""}],
    types: placeholder as Registry['clientes.cadastrar']['types'],
  },
  'clientes.listar_clientes': {
    methods: ["GET","HEAD"],
    pattern: '/clientes/listar',
    tokens: [{"old":"/clientes/listar","type":0,"val":"clientes","end":""},{"old":"/clientes/listar","type":0,"val":"listar","end":""}],
    types: placeholder as Registry['clientes.listar_clientes']['types'],
  },
  'clientes.listar_cliente': {
    methods: ["GET","HEAD"],
    pattern: '/clientes/listar/:id',
    tokens: [{"old":"/clientes/listar/:id","type":0,"val":"clientes","end":""},{"old":"/clientes/listar/:id","type":0,"val":"listar","end":""},{"old":"/clientes/listar/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clientes.listar_cliente']['types'],
  },
  'clientes.editar_cliente': {
    methods: ["PUT"],
    pattern: '/clientes/editar',
    tokens: [{"old":"/clientes/editar","type":0,"val":"clientes","end":""},{"old":"/clientes/editar","type":0,"val":"editar","end":""}],
    types: placeholder as Registry['clientes.editar_cliente']['types'],
  },
  'clientes.deletar_cliente': {
    methods: ["DELETE"],
    pattern: '/clientes/deletar/:id',
    tokens: [{"old":"/clientes/deletar/:id","type":0,"val":"clientes","end":""},{"old":"/clientes/deletar/:id","type":0,"val":"deletar","end":""},{"old":"/clientes/deletar/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clientes.deletar_cliente']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
