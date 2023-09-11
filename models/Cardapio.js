const mongoose = require("mongoose")

const { Schema } = mongoose;

const cardapioSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const Cardapio = mongoose.model("Cardapio", cardapioSchema);

module.exports = { Cardapio, cardapioSchema };