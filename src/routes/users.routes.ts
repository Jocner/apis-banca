import { Router } from 'express';
const router = Router();
import { postUser, postLogin } from '../controllers/user.controller';

/**
 * @swagger
 * /users:
 *  post:
 *    summary: create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: the users was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 *
 */
router.post('/users',
   postUser
);


/**
 * @swagger
 * /users:
 *  post:
 *    summary: create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: the users was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 *
 */
router.post('/login',
   postLogin
);


export default router;