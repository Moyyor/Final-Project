const usersRouter = require('express').Router();

const {findAllUsers, createUser, updateUser, deleteUser} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted} = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', createUser, sendUserCreated);
usersRouter.put("/users/:id", updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;