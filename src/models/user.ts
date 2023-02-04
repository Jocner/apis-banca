import { Schema, model, Document } from 'mongoose';


const usersSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    rut: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});



export interface IUser extends Document {
    nombre: string;
    rut: string;
    email: string;
    password: string;
}



export default model<IUser>('User', usersSchema);