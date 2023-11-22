const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  add,
  findAll,
  findById,
  remove,
  update,
};

async function add(payment) {
  const [id] = await db("payments").insert(payment, "id");
  return id;
}

async function findAll() {
  return await db("payments");
}

async function findById(id) {
  return await db("payments").where({ id: id }).first();
}

async function remove(id) {
  return await db("payments").where({ id: id }).del();
}

async function update(id, changes) {
  return await db("payments")
    .where({ id: id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
