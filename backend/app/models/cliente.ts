import { ClienteSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Pedido from '#models/pedido'

export default class Cliente extends ClienteSchema {

    //Definindo relacionamento via models
    @hasMany(() => Pedido)
    declare pedidos: HasMany<typeof Pedido>
}