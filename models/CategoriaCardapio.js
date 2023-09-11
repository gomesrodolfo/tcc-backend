const mongoose = require("mongoose")

const { Schema } = mongoose;

const categoriaCardapioSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  comida: {
    type: String,
    required: false,
  },
  bebida: {
    type: String,
    required: false,
  },
}, { timestamps: true })

const CategoriaCardapio = mongoose.model("CategoriaCardapio", categoriaCardapioSchema);

module.exports = { CategoriaCardapio, categoriaCardapioSchema };