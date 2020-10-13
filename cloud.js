const AV = require('leanengine')
const fs = require('fs')
const path = require('path')

/**
 * Loads all cloud functions under the `functions` directory.
 */
fs.readdirSync(path.join(__dirname, 'functions')).forEach( file => {
  require(path.join(__dirname, 'functions', file))
})

/**
 * A simple cloud function.
 */
AV.Cloud.define('hello', function(request) {
  return 'Hello world!'
})

AV.Cloud.define('createTodo', async (request) => {
  const Todo = AV.Object.extend('Todo');
  const todo = new Todo();
  todo.set('content', request.params.content);
  return todo.save();
});