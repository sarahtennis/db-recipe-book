
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', (tbl) => {
        tbl.increments();
        tbl.string('ingredient_name').notNullable().unique('ingredient_name');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
