import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('User', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsApp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('User');
}