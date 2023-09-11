const { Double } = require("mongodb");
const mongoose = require("mongoose")

const { Schema } = mongoose;

const itemCardapioSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  tempoPreparo: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const ItemCardapio = mongoose.model("ItemCardapio", itemCardapioSchema);

module.exports = { ItemCardapio, itemCardapioSchema };