import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Pedido from '#models/pedido'
import Produto from '#models/produto'
import Cliente from '#models/cliente'

export default class PedidosController {

    async criarPedido({ request, response }: HttpContext){

        // adquire os cados do cliente e os produtos
        const { cliente_id, produtos } = request.only(['cliente_id', 'produtos'])

        // verifica se foi informado um cliente para o pedido
        if (!cliente_id) {
            return response.status(400).json({ erro: 'O cliente é obrigatorio para cadastro'})
        }

        // verifica se foi informado algum produto para o pedido
        if (!produtos || produtos.length == 0) {
            return response.status(400).json({ erro: 'O pedido deve conter um produto'})
        }
        
        // Busca o cliente no banco de dados e valida a existencia do cadastro        
        const clienteExiste = await Cliente.find(cliente_id)
        if (!clienteExiste) {
            return response.status(404).json({ erro: 'Cliente não encontrado no banco de dados'})
        }

        // inicia a transação
        const trx = await db.transaction()

        try {

            // cria um novo pedido
            const pedido = new Pedido()
            pedido.clienteId = cliente_id
            pedido.valorTotal = "0"

            // inicia a transação
            pedido.useTransaction(trx)
            await pedido.save()

            //variavel para soma do valor total do pedido
            let valorTotalPedido = 0

            for (const item of produtos) {

                // valida se a quantidade de produtos for maior do que 1

                if (item.quantidade < 1) {
                    throw new Error (`Quantidade do produto ID ${item.produto_id} é invalida`)
                }

                // Realiza a busca do produto no banco de dados e valida a existencia e se esta ativo

                const produtoBanco = await Produto.find(item.produto_id)

                if (!produtoBanco) {
                    throw new Error (`Produto ID ${item.produto_id} não encontrado`)
                }
                if (!produtoBanco.ativo) {
                    throw new Error (`Produto ${produtoBanco.nome} não encontrado`)
                }

                // calcula valor total do item
                const precoUnidade = Number(produtoBanco.preco)
                const valorTotalItem = precoUnidade * item.quantidade
                
                // realiza a criação de um do(s) item(s) do pedido
                await pedido.related('itensPedido').create({
                    produtoId: produtoBanco.id,
                    quantidade: item.quantidade,
                    precoUnitario: precoUnidade.toFixed(2),
                    precoTotal: valorTotalItem.toFixed(2)
                }, { client: trx})

                // soma o valor total do item para o valor todal do pedido
                valorTotalPedido += valorTotalItem
            }

            // atualiza o valor total do pedido
            pedido.valorTotal = valorTotalPedido.toFixed(2)
            await pedido.save()

            // confirma a transação no banco de dados
            await trx.commit()

            // carrega os itens do pedido e retorna
            await pedido.load('itensPedido')
            return response.status(201).json(pedido)

        } catch(error) {
            //faz o rollback da transação em caso de erro
            await trx.rollback()
            return response.status(400).json({ erro: error})
        }
    }

    async listarPedidos({ response }: HttpContext){

        // busca todos os pedidos existentes
        const pedidos = await Pedido.query()
            .preload('clientes')
            .preload('itensPedido', (query) => {
                query.preload('produtos')
            })
            .orderBy('criadoEm', 'desc')

        // retorna os pedidos
        return response.status(200).json(pedidos)
    }

    async buscarPedido({ params, response }: HttpContext){

        // adquire o id do pedido
        const id_pedido = params.id

        // realiza a busca do pedido pelo id
        const pedido = await Pedido.query()
            .where('id', id_pedido)
            .preload('clientes')
            .preload('itensPedido', (query) => {
                query.preload('produtos')
            })
            .first()
        
        // verifica a existencia do pedido
        if (!pedido) {
            return response.status(404).json({ erro: 'Pedido não encontrado no banco de dados'})
        }

        // retorna o pedido buscado
        return response.status(200).json({pedido})
    }

    async alterarStatus({ params, request, response }: HttpContext){

        // adquire o id do pedido para procura
        const id_pedido = params.id

        // adquire o status a ser atualizado
        const { status } = request.only([ 'status' ])
        
        // array de status permitidos para alteração
        const statusPermitidos = ['pendente', 'em preparação', 'pronto', 'finalizado', 'cancelado']

        // faz a verificação do status informado, verificando se ele é permitido
        if (!statusPermitidos.includes(status)){
            return response.status(400).json({ erro: 'Status invalido'})
        }

        // faz a busca do pedido pelo id
        const pedido = await Pedido.query()
            .where('id', id_pedido)
            .first()

        // verifica a existencia do pedido
        if (!pedido) {
            return response.status(404).json({ erro: 'Pedido não encontrado no banco de dados'})
        }

        // impede a alteração do status do pedido caso ele ja esteja cancelado ou finalizado
        if(pedido.status === 'cancelado' || pedido.status === 'finalizado') {
            return response.status(400).json({ erro: 'Não é possivel alterar o status de um pedido finalizado ou cancelado'})
        }

        // atualiza e salva o novo status do pedido
        pedido.status = status
        await pedido.save()

        // retorna o pedido salvo com o novo status
        return response.status(200).json(pedido)
    }
}