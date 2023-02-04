// import { connect } from 'mongoose';
const mongoose = require('mongoose');
import * as dotenv from 'dotenv';

// require('dotenv').config({ path: '../../.env'});
dotenv.config();


//const {  } = require('dotenv').config({ path: '../variables.env'});


// const conectarDB = async() => {
//     try {
    
//         await connect( process.env. , {
//            useNewUrlParser: true,
//            useUnifiedTopology: true,
//            useFindAndModify: false
//         });
//         console.log('DB Conectada');
//     } catch(error) {
//         console.log('hubo un error');
//         console.log(error);
//         process.exit(1);
//     }
// }

// const db1 = '.';

// const db = process.env.DB_MONGO;

const conectarDB = async() => {
    try {
    
    await mongoose.connect(process.env.DB_MONGO , {
           useNewUrlParser: true,
           useUnifiedTopology: true,
        //    useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch(error) {
        console.log('hubo un error');
        console.log(error);
        process.exit(1);
    }
}

//connect(process.env.DB_MONGO)


// module.exports = conectarDB;

export default conectarDB;