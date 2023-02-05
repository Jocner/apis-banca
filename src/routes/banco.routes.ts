import { Router } from 'express';
const router = Router();
import { postBanco, getBanco } from '../controllers/banco.controller';

/**
 * @swagger
 * tags:
 *  name: Banco
 *  description: Bancos endpoint
 */

/**
 * @swagger
 * /newBanco:
 *  post:
 *    summary: create a new Bancos
 *    tags: [Bancos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Banco'
 *    responses:
 *      200:
 *        description: the users was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Banco'
 *      500:
 *        description: Some server error
 *
 */
router.post('/newBanco',
   postBanco
);

/**
 * @swagger
 * /bancos:
 *  get:
 *    summary: Return a User list
 *    tags: [Bancos]
 *    responses:
 *      200:
 *        description: list of destinatarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Banco'      
 */
router.get('/bancos', 
   getBanco
);

export default router;