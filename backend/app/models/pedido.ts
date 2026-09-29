import { PedidoSchema } from '#database/schema'
import { belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Cliente from '#models/cliente'
import Itenspedido from '#models/itens_pedido'

export default class Pedido extends PedidoSchema {

    //Definindo relacionamento via models
    @belongsTo(() => Cliente, {
        foreignKey: 'clienteId'
    })
    declare clientes: BelongsTo<typeof Cliente>

    @hasMany(() => Itenspedido)
    declare itensPedido: HasMany<typeof Itenspedido>
}