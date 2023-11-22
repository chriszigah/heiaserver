const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  addProfile,
  findAllProfiles,
  findProfileByID,
  findProfileByUserId,
  removeProfileByID,
  findProfileByUsername,
  updateProfile,
};

async function addProfile(Profile) {
  return await db("profiles").insert(Profile);
}

async function findAllProfiles() {
  return await db("profiles");
}

async function findProfileByID(id) {
  return await db("profiles").where({ _id: id }).first();
}

async function findProfileByUserId(userid) {
  return await db("profiles").where({ userid }).first();
}

async function findProfileByUsername(username) {
  return await db("profiles").where({ username }).first();
}

async function updateProfile(id, changes) {
  return await db("profiles")
    .where({ _id: id })
    .update(changes)
    .then(() => {
      return findProfileByID(id);
    });
}

async function removeProfileByID(id) {
  return await db("profiles").where({ _id: id }).del();
}
