import * as mongoose from 'mongoose';

export const EmpresaSchema = new mongoose.Schema({

    nome: {type: String, required: true, trim: true, index:{unique:true}},
    email: {type: String, required: true, trim: true},
    telefone: {type: String, required: true, trim: true},
    ativo: {type: Boolean, required:true},

})