/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'clientes.cadastrar_cliente': {
    methods: ["POST"]
    pattern: '/clientes/cadastrar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['cadastrarCliente']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clientes_controller').default['cadastrarCliente']>>>
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
  'produtos.cadastrar_produto': {
    methods: ["POST"]
    pattern: '/produtos/cadastrar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['cadastrarProduto']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['cadastrarProduto']>>>
    }
  }
  'produtos.listar_produtos': {
    methods: ["GET","HEAD"]
    pattern: '/produtos/listar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['listarProdutos']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['listarProdutos']>>>
    }
  }
  'produtos.listar_produto': {
    methods: ["GET","HEAD"]
    pattern: '/produtos/listar/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['listarProduto']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['listarProduto']>>>
    }
  }
  'produtos.editar_produto': {
    methods: ["PUT"]
    pattern: '/produtos/editar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['editarProduto']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['editarProduto']>>>
    }
  }
  'produtos.deletar_produto': {
    methods: ["DELETE"]
    pattern: '/produtos/deletar/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['deletarProduto']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['deletarProduto']>>>
    }
  }
  'pedidos.criar_pedido': {
    methods: ["POST"]
    pattern: '/pedidos/cadastrar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['criarPedido']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['criarPedido']>>>
    }
  }
  'pedidos.listar_pedidos': {
    methods: ["GET","HEAD"]
    pattern: '/pedidos/listar'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['listarPedidos']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['listarPedidos']>>>
    }
  }
  'pedidos.buscar_pedido': {
    methods: ["GET","HEAD"]
    pattern: '/pedidos/listar/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['buscarPedido']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['buscarPedido']>>>
    }
  }
  'pedidos.alterar_status': {
    methods: ["PUT"]
    pattern: '/pedidos/status/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['alterarStatus']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/pedidos_controller').default['alterarStatus']>>>
    }
  }
}
