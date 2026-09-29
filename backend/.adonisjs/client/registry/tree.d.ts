/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  clientes: {
    teste: typeof routes['clientes.teste']
    cadastrar: typeof routes['clientes.cadastrar']
  }
}
