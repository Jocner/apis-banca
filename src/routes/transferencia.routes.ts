import { Router } from 'express';
const router = Router();
import { postTransferencia, getTransferencia } from '../controllers/tranferencia.controller';

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoint
 */

/**
 * @swagger
 * /newTransferencia:
 *  post:
 *    summary: create a new tranferencia
 *    tags: [Tranferencias]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Transferencia'
 *    responses:
 *      200:
 *        description: the users was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Transferencia'
 *      500:
 *        description: Some server error
 *
 */
router.post('/newTransferencia',
   postTransferencia
);


/**
 * @swagger
 * /transferencias:
 *  get:
 *    summary: Return a User list
 *    tags: [Transferencias]
 *    responses:
 *      200:
 *        description: list of transferencia
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Transferencia'      
 */
router.get('/transferencias', 
   getTransferencia
);

export default router;