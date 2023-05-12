import express from 'express';
import { addNewUser, getUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.use(function timeLog(req, res, next) {
    next();
});

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', addNewUser);

userRouter.put('/:id', updateUserById);

userRouter.delete('/:id', deleteUserById)

export {userRouter};