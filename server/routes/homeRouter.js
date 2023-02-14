const express = require('express')
const router = express.Router()
const { listAllTodos, addTodo, updateAllTodos, removeTodo } = require('../controller/homeController');

router.get('/', listAllTodos); 

router.post('/', addTodo); 

router.put('/', updateAllTodos);

router.delete('/:id', removeTodo);

module.exports = router; 