import { Handler } from 'express';
import User, { IUser } from '../models/user';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();


export const postUser: Handler = async(req, res) => {

    try {
        const { email, rut, password, nombre } = req.body;

        const round = 10;
        const passEncrip = await bcrypt.hash(password, round);

        let users = await User.findOne({email: email}) as IUser;
        

        if(users) {
            res.status(402).json({ msg: 'ya existe un usuario'});
        } 

        if(!email || !rut) {
            console.log("req vacia", email);
            res.status(404).json({ msg: 'error en el servicio'});
        }
        
        
        else {

        // const user = new User(req.body);
        const user = new User({ nombre : nombre, rut : rut, email : email, password : passEncrip});

        await user.save();


        res.json({user});

        }

    } catch(err) {
        console.log(err);
    }

    
};


export const postLogin: Handler = async(req, res) => {

    try {
        const { email, password } = req.body;


        let users = await User.findOne({email: email}) as IUser;
         
        
        const compare = await bcrypt.compare(password, users.password);

        // if(users) {
        //     res.status(402).json({ msg: ''});
        // } 
        console.log(users);

        const generatoken = jwt.sign({
            data: users
        }, '123456789', {
            expiresIn: 60 * 60 * 24
        }
        )


        

        const token = compare ? { message : 'SUCCESS', token: generatoken} : { msg : 'CREDENCIALES INVALIDOS', token: generatoken }  ;

        console.log('desepcriptado', compare);

        console.log('token', token);
        



        res.json({token});



    } catch(err) {
        console.log('ERROR DEL SERVICIO', err);
        res.json({msg : 'ERROR DEL SERVICIO',
            err});
       
    }

    
};