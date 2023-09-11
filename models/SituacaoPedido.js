const mongoose = require("mongoose")

const { Schema } = mongoose;

const situacaoPedidoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const SituacaoPedido = mongoose.model("SituacaoPedido", situacaoPedidoSchema);

module.exports = { SituacaoPedido, situacaoPedidoSchema };