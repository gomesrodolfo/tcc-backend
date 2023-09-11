const mongoose = require("mongoose")

const { Schema } = mongoose;

const RestauranteSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  cnpj: {
    type: String,
    required: false,
  },
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  numeroTelefone: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const Restaurante = mongoose.model("Restaurante", RestauranteSchema);

module.exports = { Restaurante, RestauranteSchema };