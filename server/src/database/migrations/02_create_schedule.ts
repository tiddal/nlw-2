import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Schedule', table => {
    table.string('id').primary();
    table.integer('weekDay').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    table.string('classId').notNullable().references('id').inTable('Class').onDelete('CASCADE').onUpdate('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Schedule');
}