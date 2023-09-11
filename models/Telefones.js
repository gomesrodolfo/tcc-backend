const mongoose = require("mongoose")

const { Schema } = mongoose;

const telefoneSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const Telefone = mongoose.model("Telefone", telefoneSchema);

module.exports = { Telefone, telefoneSchema };