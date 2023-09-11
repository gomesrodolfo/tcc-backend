const mongoose = require("mongoose")

const { Schema } = mongoose;

const itemExtraCardapioSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const ItemExtraCardapio = mongoose.model("ItemExtraCardapio", itemExtraCardapioSchema);

module.exports = { ItemExtraCardapio, itemExtraCardapioSchema };