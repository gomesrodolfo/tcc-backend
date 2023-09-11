const { Recibo: ReciboModel } = require("../models/Recibo");

const ReciboController = {
  create: async (req, res) => {
    try {
      const recibo = {
        id: req.body.id,
        totalPago: req.body.totalPago,
        tipoPagamento: req.body.tipoPagamento,
        data: req.body.data,
        descricao: req.body.descricao,
      }

      const response = await ReciboModel.create(recibo);

      res.status(201).json({ response, msg: "Recibo foi criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const recibo = await ReciboModel.find();
      res.json(recibo);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const recibo = await ReciboModel.findById(id);

      if (!recibo) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(recibo);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedReciboServer = await ReciboModel.findByIdAndDelete(id)

      if (!deletedSituacaoServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedReciboServer, msg: "Recibo foi excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const recibo = {
      id: req.body.id,
      totalPago: req.body.totalPago,
      tipoPagamento: req.body.tipoPagamento,
      data: req.body.data,
      descricao: req.body.descricao,
    }
    const updateReciboService = await ReciboModel.findByIdAndUpdate(id, recibo);

    if (!updateReciboService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateReciboService, msg: "Recibo atualizado com sucesso." });
  }
};

module.exports = ReciboController;