
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (tbl) => {
        tbl.increments();
        tbl.string('recipe_name').notNullable();
        tbl.integer('dish_id').unsigned().notNullable();
        tbl.foreign('dish_id').references('id').inTable('dishes').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};
