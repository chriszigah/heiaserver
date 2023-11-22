const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
  add,
  find,
  findById,
  remove,
  update,
  addMessage,
  findMessageById,
  findAllMessages,
};

async function add(lesson) {
  const [_id] = await db('lessons').insert(lesson, '_id');
  return _id;
}

async function find() {
  return await db('lessons');
}

async function findById(id) {
  return await db('lessons').where({ _id: id }).first();
}

async function remove(id) {
  return await db('lessons').where({ _id: id }).del();
}

async function update(id, changes) {
  return await db('lessons')
    .where({ _id: id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

async function findMessageById(id) {
  return await db('messages').where({ _id: id }).first();
}

async function addMessage(message, lesson_id) {
  const [id] = await db('messages').where({ _id: lesson_id }).insert(message);
  return findMessageById({ _id: id });
}

async function findAllMessages() {
  return await db('messages');
}
