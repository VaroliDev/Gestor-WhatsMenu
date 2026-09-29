import type { HttpContext } from '@adonisjs/core/http'

import Cliente from '#models/cliente'

export default class ClientesController {

    public async cadastrar({ request, response }: HttpContext) {
        const dados = request.only(['nome', 'telefone'])

        if (!dados.nome){
            return response.status(400).json({ error: 'Nome é obrigatório' })
        }

        if (!dados.telefone){
            return response.status(400).json({ error: 'Telefone é obrigatório' })
        }

        const cliente = await Cliente.create(dados)
        return response.status(201).json(cliente)
    }


    public async teste(){
        return 'Teste de rota funcionando'
    }
}