/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("profiles", (tbl) => {
    tbl.text("id").index().primary;
    tbl.text("userid", 25).notNullable();
    tbl.text("username", 25).notNullable();
    tbl.text("fname", 25).notNullable();
    tbl.text("lname", 25).notNullable();
    tbl.text("oname", 25);
    tbl.dateTime("dob");
    tbl.text("email", 25);
    tbl.text("classid", 25);
    tbl.text("parentid", 25);
    tbl.text("teacherid", 25);
    tbl.text("researchersid", 25);
    tbl.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
