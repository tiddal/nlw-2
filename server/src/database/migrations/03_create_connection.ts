import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Connection', table => {
    table.string('id').primary();
    table.string('userId').notNullable().references('id').inTable('User').onDelete('CASCADE').onUpdate('CASCADE');
    table.timestamp('createdAt').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Connection');
}