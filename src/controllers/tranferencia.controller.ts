import { Handler } from 'express';
// import Transferencia, { ITransferencia } from '../models/transferencia';
import Transferencia from '../models/transferencia';
import * as dotenv from 'dotenv';

dotenv.config();


export const postTransferencia: Handler = async(req, res) => {

    try {
        const { email, rut, nombre, telefono, cuenta, bancodestino, monto } = req.body;


        // let destinatario = await Transferencia.findOne({rut: rut}) as ITransferencia;
        

        // if(destinatario) {
        //     res.status(402).json({ msg: 'destinatario registrado'});
        // } 

        if(!email || !rut || !nombre || !telefono || !cuenta || !bancodestino || !monto) {
            console.log("req vacia", email);
            res.status(404).json({ msg: 'error en el servicio'});
        }
        
        
        else {

        const register = new Transferencia(req.body);

        await register.save();
     
        res.json({register});

        }

    } catch(err) {
        console.log(err);
    }

    
};
