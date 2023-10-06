import 'express-async-errors';
import express from 'express';
import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

const userRouter = express.Router();
const userController = new UserController(new UserService(client));

/**
 * @openapi
 * /users:
 *  get:
 *     tags:
 *     - Users
 *     description: Creates new user
 *     responses:
 *       200:
 *         description: User created
 */
userRouter.post('/users', userController.createUser);

export default userRouter;
