import { Router } from 'express';
const router = Router();
import { postTransferencia } from '../controllers/tranferencia.controller';

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
 *    summary: create a new destinatario
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

export default router;