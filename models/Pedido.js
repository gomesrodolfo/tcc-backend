const mongoose = require("mongoose")

const { Schema } = mongoose;

const pedidoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: false,
  },
  horaPedido: {
    type: Date,
    required: true,
  },
  numeroPedido: {
    type: Number,
    required: true,
  },
  numeroMesa: {
    type: Number,
    required: true,
  },
}, { timestamps: true })

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = { Pedido, pedidoSchema };