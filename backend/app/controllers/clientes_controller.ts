import type { HttpContext } from '@adonisjs/core/http'

import Cliente from '#models/cliente'

export default class ClientesController {

    async cadastrarCliente({ request, response }: HttpContext) {

        // adquire nome e telefone
        const dados = request.only(['nome', 'telefone'])

        // valida se os dados foram preenchidos
        if (!dados.nome){
            return response.status(400).json({ erro: 'Nome é obrigatório' })
        }

        if (!dados.telefone){
            return response.status(400).json({ erro: 'Telefone é obrigatório' })
        }

        // cria o cliente no banco de dados
        const cliente = await Cliente.create(dados)

        // retorna os dados cadastrados
        return response.status(201).json(cliente)
    }

    async listarClientes({ response }: HttpContext) {

        // busca todos os clientes no banco de dados
        const clientes = await Cliente.all()

        // retorna a lista de clientes
        return response.status(200).json(clientes)
    }

    async listarCliente({ params, response }: HttpContext){

        // adquire o id do cliente
        const id_cliente = params.id

        // busca o cliente no banco de dados
        const cliente = await Cliente.find(id_cliente)

        // valida se cliente foi encontrado
        if (!cliente) {
            return response.status(404).json({ erro: 'Cliente não encontrado' })
        }

        // retorna o cliente encontrado
        return response.status(200).json(cliente)
    }

    async editarCliente({ request, response }: HttpContext){

        // adquire o id, nome e telefone para edição do cliente
        const dados_cliente = request.only(['id', 'nome', 'telefone'])

        // busca o cliente no banco de dados
        const cliente = await Cliente.find(dados_cliente.id)

        // valida se cliente foi encontrado
        if (!cliente) {
            return response.status(404).json({ erro: 'Cliente não encontrado' })
        }

        // atualiza os dados do cliente dependendo do que foi enviado na requisição
        if (dados_cliente.nome) {
            cliente.nome = dados_cliente.nome
        }

        if (dados_cliente.telefone) {
            cliente.telefone = dados_cliente.telefone
        }

        // salva as alterações no banco de dados
        await cliente.save()

        // retorna o cliente atualizado
        return response.status(200).json(cliente)
    }

    async deletarCliente({ params, response }: HttpContext){

        //  adquire o id do cliente
        const id_cliente = params.id

        // busca o cliente no banco de dados
        const cliente = await Cliente.find(id_cliente)

        // valida se cliente foi encontrado
        if (!cliente) {
            return response.status(404).json({ erro: 'Cliente não encontrado' })
        }

        // deleta o cliente do banco de dados
        await cliente.delete()

        // retorna uma mensagem de sucesso
        return response.status(200).json({ mensagem: 'Cliente deletado com sucesso' })
    }
}