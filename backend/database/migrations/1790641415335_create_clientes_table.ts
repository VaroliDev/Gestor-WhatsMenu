import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  //definindo nome da tabela

  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      //definindo colunas da tabela e seus tipos

      table.increments('id')

      table.string('nome', 255).notNullable()
      table.string('telefone', 11).notNullable()

      table.timestamp('criado_em').notNullable().defaultTo(this.now())
      table.timestamp('modificado_em').defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}