import { Handler } from 'express';
import Transferencia from '../models/transferencia';
import * as dotenv from 'dotenv';

dotenv.config();


export const postTransferencia: Handler = async(req, res) => {

    try {
        const { email, rut, nombre, telefono, cuenta, bancodestino, monto } = req.body;




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


export const getTransferencia: Handler = async(req, res) => {
    try {

        const transferencia = await Transferencia.find();

        const transacion = transferencia ? transferencia : 'error en servidor';

        res.json({transacion});


    }catch(err) {

        console.log(err);

    }
};
