/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'clientes.cadastrar_cliente': {
    methods: ["POST"],
    pattern: '/clientes/cadastrar',
    tokens: [{"old":"/clientes/cadastrar","type":0,"val":"clientes","end":""},{"old":"/clientes/cadastrar","type":0,"val":"cadastrar","end":""}],
    types: placeholder as Registry['clientes.cadastrar_cliente']['types'],
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
  'produtos.cadastrar_produto': {
    methods: ["POST"],
    pattern: '/produtos/cadastrar',
    tokens: [{"old":"/produtos/cadastrar","type":0,"val":"produtos","end":""},{"old":"/produtos/cadastrar","type":0,"val":"cadastrar","end":""}],
    types: placeholder as Registry['produtos.cadastrar_produto']['types'],
  },
  'produtos.listar_produtos': {
    methods: ["GET","HEAD"],
    pattern: '/produtos/listar',
    tokens: [{"old":"/produtos/listar","type":0,"val":"produtos","end":""},{"old":"/produtos/listar","type":0,"val":"listar","end":""}],
    types: placeholder as Registry['produtos.listar_produtos']['types'],
  },
  'produtos.listar_produto': {
    methods: ["GET","HEAD"],
    pattern: '/produtos/listar/:id',
    tokens: [{"old":"/produtos/listar/:id","type":0,"val":"produtos","end":""},{"old":"/produtos/listar/:id","type":0,"val":"listar","end":""},{"old":"/produtos/listar/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['produtos.listar_produto']['types'],
  },
  'produtos.editar_produto': {
    methods: ["PUT"],
    pattern: '/produtos/editar',
    tokens: [{"old":"/produtos/editar","type":0,"val":"produtos","end":""},{"old":"/produtos/editar","type":0,"val":"editar","end":""}],
    types: placeholder as Registry['produtos.editar_produto']['types'],
  },
  'produtos.deletar_produto': {
    methods: ["DELETE"],
    pattern: '/produtos/deletar/:id',
    tokens: [{"old":"/produtos/deletar/:id","type":0,"val":"produtos","end":""},{"old":"/produtos/deletar/:id","type":0,"val":"deletar","end":""},{"old":"/produtos/deletar/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['produtos.deletar_produto']['types'],
  },
  'pedidos.criar_pedido': {
    methods: ["POST"],
    pattern: '/pedidos/cadastrar',
    tokens: [{"old":"/pedidos/cadastrar","type":0,"val":"pedidos","end":""},{"old":"/pedidos/cadastrar","type":0,"val":"cadastrar","end":""}],
    types: placeholder as Registry['pedidos.criar_pedido']['types'],
  },
  'pedidos.listar_pedidos': {
    methods: ["GET","HEAD"],
    pattern: '/pedidos/listar',
    tokens: [{"old":"/pedidos/listar","type":0,"val":"pedidos","end":""},{"old":"/pedidos/listar","type":0,"val":"listar","end":""}],
    types: placeholder as Registry['pedidos.listar_pedidos']['types'],
  },
  'pedidos.buscar_pedido': {
    methods: ["GET","HEAD"],
    pattern: '/pedidos/listar/:id',
    tokens: [{"old":"/pedidos/listar/:id","type":0,"val":"pedidos","end":""},{"old":"/pedidos/listar/:id","type":0,"val":"listar","end":""},{"old":"/pedidos/listar/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pedidos.buscar_pedido']['types'],
  },
  'pedidos.alterar_status': {
    methods: ["PUT"],
    pattern: '/pedidos/status/:id',
    tokens: [{"old":"/pedidos/status/:id","type":0,"val":"pedidos","end":""},{"old":"/pedidos/status/:id","type":0,"val":"status","end":""},{"old":"/pedidos/status/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pedidos.alterar_status']['types'],
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
