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

async function add(schorlaship) {
  const [id] = await db("schorlaships").insert(schorlaship, "id");
  return id;
}

async function findAll() {
  return await db("schorlaships");
}

async function findById(id) {
  return await db("schorlaships").where({ id: id }).first();
}

async function remove(id) {
  return await db("schorlaships").where({ id: id }).del();
}

async function update(id, changes) {
  return await db("schorlaships")
    .where({ id: id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
