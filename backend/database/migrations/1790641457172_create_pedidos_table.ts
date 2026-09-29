import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  //definindo nome da tabela

  protected tableName = 'pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      //definindo colunas da tabela e seus tipos

      table.increments('id')

      //definindo relacionamento entre tabelas

      table.integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')
        .notNullable()

      //definindo possiveis valores para o status de um pedido

      table.enum('status', ['pendente', 'em preparação', 'pronto', 'finalizado', 'cancelado'])
      .defaultTo('pendente')
      .notNullable()

      table.decimal('valor_total', 10, 2).notNullable()

      table.timestamp('criado_em', { useTz: true }).defaultTo(this.now()).notNullable()
      table.timestamp('modificado_em', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}