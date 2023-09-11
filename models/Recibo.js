const mongoose = require("mongoose")

const { Schema } = mongoose;

const reciboSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  totalPago: {
    type: Number,
    required: false,
  },
  tipoPagamento: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
}, { timestamps: true })

const Recibo = mongoose.model("Recibo", reciboSchema);

module.exports = { Recibo, reciboSchema };