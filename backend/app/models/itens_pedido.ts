import { ItensPedidoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Pedido from '#models/pedido'
import Produto from '#models/produto'

export default class ItensPedido extends ItensPedidoSchema {

    //Definindo relacionamento via models
    @belongsTo(() => Pedido, {
        foreignKey: 'pedido_id'
    })
    declare pedidos: BelongsTo<typeof Pedido>

    @belongsTo(() => Produto, {
        foreignKey: 'produto_id'
    })
    declare produtos: BelongsTo<typeof Produto>
}