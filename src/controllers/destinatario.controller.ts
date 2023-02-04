import { Handler } from 'express';
import Destinatario, { IDestinatario } from '../models/destinatario';
import * as dotenv from 'dotenv';

dotenv.config();


export const postDestinatario: Handler = async(req, res) => {

    try {
        const { email, rut } = req.body;


        let destinatario = await Destinatario.findOne({rut: rut}) as IDestinatario;
        

        if(destinatario) {
            res.status(402).json({ msg: 'destinatario registrado'});
        } 

        if(!email || !rut) {
            console.log("req vacia", email);
            res.status(404).json({ msg: 'error en el servicio'});
        }
        
        
        else {

        const register = new Destinatario(req.body);

        await register.save();
     
        res.json({register});

        }

    } catch(err) {
        console.log(err);
    }

    
};

export const getDestinatario: Handler = async(req, res) => {
    try {

        const destinatario = await Destinatario.find();

        const clientes = destinatario ? destinatario : 'error en servidor';

        res.json({clientes});


    }catch(err) {

        console.log(err);

    }
};