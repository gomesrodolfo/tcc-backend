const mongoose = require("mongoose")

const { Schema } = mongoose;

const pagamentoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  totalConta: {
    type: Number,
    required: false,
  },
  descricao: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
}, { timestamps: true })

const Pagamento = mongoose.model("Pagamento", pagamentoSchema);

module.exports = { Pagamento, pagamentoSchema };