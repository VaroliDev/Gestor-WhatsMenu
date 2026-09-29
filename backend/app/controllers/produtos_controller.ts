import type { HttpContext } from '@adonisjs/core/http'
import Produto from '#models/produto'

export default class ProdutosController {

    async cadastrarProduto({ request, response }: HttpContext) {

        // adquire dados do produto a ser cadastrado
        const dados = request.only(['nome', 'preco'])

        // valida dados recebidos
        if (!dados.nome){
            return response.status(400).json({ erro: 'Nome do produto é obrigatório'})
        }

        if (!dados.preco){
            return response.status(400).json({ erro: 'Preço do produto é obrigatório'})
        }

        //cria o produto no banco de dados
        const produto = await Produto.create(dados)

        //retornar o produto criado
        return response.status(201).json(produto)
    }

    async listarProdutos({ response }: HttpContext){

        // busca os produtos no banco de dados
        const produtos = await Produto.all()

        // retorna os produtos
        return response.status(200).json(produtos)
    }

    async listarProduto({ params, response }: HttpContext){

        // adquire id do produto para consulta
        const id_produto = params.id

        // busca o produto no banco dados
        const produto = await Produto.find(id_produto)

        // verifica o produto existe no banco de dados
        if (!produto) {
            return response.status(404).json({ erro: 'Produto não encontrado no banco de dados'})
        }

        // retorna o produto encontrado
        return response.status(200).json(produto)
    }

    async editarProduto({ request, response }: HttpContext){

        // adquire dados do produto
        const dados = request.only(['id', 'nome', 'preco', 'ativo'])

        // busca o produto no banco de dados
        const produto = await Produto.find(dados.id)

        // verifica se o produto foi encontrado
        if (!produto) {
            return response.status(404).json({ erro: 'Produto não encontrado no banco de dados'})
        }

        // atualiza os dados do produto com base no que foi enviado na requesição
        if (dados.nome){
            produto.nome = dados.nome
        }

        if (dados.preco){
            produto.preco = dados.preco
        }

        if (dados.ativo == false){
            produto.ativo = false
        } else {
            produto.ativo = true
        }

        // salva as alterações do produto
        await produto.save()
        
        //retorna o produto atualizado
        return response.status(200).json(produto)
    }

    async deletarProduto({ params, response }: HttpContext){

        // adquire o id do produto
        const id_produto = params.id

        // adquire dados do produto
        const produto = await Produto.find(id_produto)

        // verifica a existencia do produto
        if (!produto){
            return response.status(404).json({ erro: 'Produto não encontrado no banco de dados'})
        }

        // apaga o produto do banco de dados
        await produto.delete()

        // retorna mensagem de sucesso
        return response.status(200).json({ message: 'Produto apagado com sucesso'})
    }
}