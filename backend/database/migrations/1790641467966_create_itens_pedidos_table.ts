import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  //definindo nome da tabela

  protected tableName = 'itens_pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      //definindo colunas da tabela e seus tipos

      table.increments('id')

      //definindo relactionamento entre tabelas

      table.integer('pedido_id')
        .unsigned()
        .references('id')
        .inTable('pedidos')
        .onDelete('CASCADE')
        .notNullable()

      table.integer('produto_id')
        .unsigned()
        .references('id')
        .inTable('produtos')
        .onDelete('CASCADE')
        .notNullable()

      table.integer('quantidade').notNullable().unsigned().defaultTo(1)
      table.decimal('preco_unitario', 10, 2).notNullable()
      table.decimal('preco_total', 10, 2).notNullable()
      
      table.timestamp('criado_em').notNullable().defaultTo(this.now())
      table.timestamp('modificado_em').defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}