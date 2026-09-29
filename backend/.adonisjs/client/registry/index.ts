/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'clientes.teste': {
    methods: ["GET","HEAD"],
    pattern: '/clientes/teste',
    tokens: [{"old":"/clientes/teste","type":0,"val":"clientes","end":""},{"old":"/clientes/teste","type":0,"val":"teste","end":""}],
    types: placeholder as Registry['clientes.teste']['types'],
  },
  'clientes.cadastrar': {
    methods: ["POST"],
    pattern: '/clientes/cadastrar',
    tokens: [{"old":"/clientes/cadastrar","type":0,"val":"clientes","end":""},{"old":"/clientes/cadastrar","type":0,"val":"cadastrar","end":""}],
    types: placeholder as Registry['clientes.cadastrar']['types'],
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
