import { Schema, model, Document } from 'mongoose';


const transferenciasSchema = new Schema({
    rut: {
        type: String,
        required: true,
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
    },
    monto: {
        type: String,
        require: true,
        trim: true
    }

    
});



export interface ITransferencia extends Document {
    rut: string;
    nombre: string;
    email: string;
    telefono: string;
    cuenta: string;
    bancodestino: string;
    monto: string;
}



export default model<ITransferencia>('Tranferencia', transferenciasSchema);