import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Class', table => {
    table.string('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();
    table.string('userId').notNullable().references('id').inTable('User').onDelete('CASCADE').onUpdate('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Class');
}