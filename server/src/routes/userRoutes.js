const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// CREATE
router.post('/add', userController.addUser);

// READ ALL
router.get('/', userController.getUsers);

// READ ONE
router.get('/:id', userController.getUserById);

// UPDATE
router.put('/:id', userController.updateUser);

// DELETE
router.delete('/:id', userController.deleteUser);

console.log("User routes loaded");
module.exports = router;