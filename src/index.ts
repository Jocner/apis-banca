import express from 'express';
import cors from 'cors';
import conectarDB from './config/db';
import userRouter from './routes/users.routes';
import destinatarioRouter from './routes/destinatario.routes';
import bancoRouter from './routes/banco.routes';
import transferenciaRouter from './routes/transferencia.routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDocs from 'swagger-jsdoc';
import { option } from './swaggerOptions';



const app = express();

conectarDB();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));

const specs = swaggerJsDocs(option);

app.use([userRouter, destinatarioRouter, bancoRouter, transferenciaRouter]);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));