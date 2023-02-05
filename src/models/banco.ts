import { Schema, model, Document } from 'mongoose';


const bancosSchema = new Schema({
    banco: {
        type: Array,
        required: true,
        unique: true,
        trim: true
    },
});



export interface IBanco extends Document {
    banco: any;
}



export default model<IBanco>('Banco', bancosSchema);