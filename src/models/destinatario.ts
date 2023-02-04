import { Schema, model, Document } from 'mongoose';


const destinatariosSchema = new Schema({
    rut: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        require: true,
        trim: true
    },
    cuenta: {
        type: String,
        require: true,
        trim: true
    },
    bancodestino: {
        type: String,
        require: true,
        trim: true
    }
});



export interface IDestinatario extends Document {
    rut: string;
    nombre: string;
    email: string;
    telefono: string;
    cuenta: string;
    bancodestino: string;
}



export default model<IDestinatario>('Destinatario', destinatariosSchema);