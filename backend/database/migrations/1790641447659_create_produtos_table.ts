import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  //definindo nome da tabela

  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      //definindo colunas da tabela e seus tipos
      
      table.increments('id')

      table.string('nome', 255).notNullable()
      table.decimal('preco', 10, 2).notNullable()
      table.boolean('ativo').defaultTo(true).notNullable()

      table.timestamp('criado_em', { useTz: true }).defaultTo(this.now()).notNullable()
      table.timestamp('modificado_em', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}