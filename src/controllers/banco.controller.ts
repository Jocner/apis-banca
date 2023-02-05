import { Handler } from 'express';
import Banco, { IBanco } from '../models/banco';



export const postBanco: Handler = async(req, res) => {

    try {
        const { banco } = req.body;


        let listbancos = await Banco.findOne({banco: banco}) as IBanco;
        

        if(listbancos) {
            res.status(402).json({ msg: 'banco existente'});
        } 

        if(!banco) {
            console.log("req vacia", banco);
            res.status(404).json({ msg: 'error en el servicio'});
        }
        
        
        else {

        const register = new Banco(req.body);

        await register.save();
     
        res.json(register);

        }

    } catch(err) {
        console.log(err);
    }

    
};

export const getBanco: Handler = async(req, res) => {
    try {

        const entidades = await Banco.find();

        const bancos = entidades ? entidades : 'error en servidor';

        res.json(bancos);


    }catch(err) {

        console.log(err);

    }
};