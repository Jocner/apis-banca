import { Router } from 'express';
const router = Router();
import { postDestinatario, getDestinatario } from '../controllers/destinatario.controller';

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoint
 */

/**
 * @swagger
 * /newDestinatario:
 *  post:
 *    summary: create a new destinatario
 *    tags: [Destinatarios]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Destinatario'
 *    responses:
 *      200:
 *        description: the users was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Destinatario'
 *      500:
 *        description: Some server error
 *
 */
router.post('/newDestinatario',
   postDestinatario
);


/**
 * @swagger
 * /destinatarios:
 *  get:
 *    summary: Return a User list
 *    tags: [Destinatarios]
 *    responses:
 *      200:
 *        description: list of destinatarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Destinatario'      
 */
router.get('/destinatarios', 
   getDestinatario
);

export default router;