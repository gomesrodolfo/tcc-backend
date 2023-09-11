const mongoose = require("mongoose")

const { Schema } = mongoose;

const cartaoDeCreditoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: false,
  },
  data: {
    type: Date,
    required: false,
  },
}, { timestamps: true })

const cartaoDeCredito = mongoose.model("cartaoDeCredito", cartaoDeCreditoSchema);

module.exports = { cartaoDeCredito, cartaoDeCreditoSchema };