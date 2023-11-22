const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  addUser,
  findAllUSers,
  findUserByID,
  findUserByEmail,
  findUserByUsername,
  removeUserByID,
  updateUser,
};

async function addUser(user) {
  return await db("users").insert(user);
}

async function findAllUSers() {
  return await db("users");
}

async function findUserByID(id) {
  return await db("users").where({ id: id }).first();
}

async function findUserByEmail(email) {
  return await db("users").where({ email }).first();
}

async function findUserByUsername(username) {
  return await db("users").where({ username }).first();
}

async function removeUserByID(id) {
  return await db("users").where({ id: id }).del();
}

async function updateUser(id, changes) {
  return await db("users")
    .where({ _id: id })
    .update(changes)
    .then(() => {
      return findUserByID(id);
    });
}
