const mongoose = require("mongoose")

const { Schema } = mongoose;

const reservaSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: false,
  },
  data: {
    type: Date,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  numeroMesa: {
    type: Number,
    required: true,
  },
}, { timestamps: true })

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = { Reserva, reservaSchema };