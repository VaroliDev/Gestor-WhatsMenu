/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'clientes.cadastrar': {
    methods: ["POST"]
    pattern: '/clientes/cadastrar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['cadastrar']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['cadastrar']>>>
    }
  }
  'clientes.listar_clientes': {
    methods: ["GET","HEAD"]
    pattern: '/clientes/listar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['listarClientes']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['listarClientes']>>>
    }
  }
  'clientes.listar_cliente': {
    methods: ["GET","HEAD"]
    pattern: '/clientes/listar/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['listarCliente']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['listarCliente']>>>
    }
  }
  'clientes.editar_cliente': {
    methods: ["PUT"]
    pattern: '/clientes/editar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['editarCliente']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['editarCliente']>>>
    }
  }
  'clientes.deletar_cliente': {
    methods: ["DELETE"]
    pattern: '/clientes/deletar/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['deletarCliente']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['deletarCliente']>>>
    }
  }
}
