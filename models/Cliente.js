const mongoose = require("mongoose")

const { Schema } = mongoose;

const clienteSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: false,
  },
  cpf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = { Cliente, clienteSchema };