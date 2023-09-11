const mongoose = require("mongoose")

const { Schema } = mongoose;

const funcionarioSchema = new Schema({
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
}, { timestamps: true })

const Funcionario = mongoose.model("Funcionario", funcionarioSchema);

module.exports = { Funcionario, funcionarioSchema };