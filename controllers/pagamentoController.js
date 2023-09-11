const { Pagamento: PagamentoModel } = require("../models/Pagamento");

const PagamentoController = {
  create: async (req, res) => {
    try {
      const pagamento = {
        id: req.body.id,
        totalConta: req.body.totalConta,
        tipoPagamento: req.body.tipoPagamento,
        data: req.body.data,
        descricao: req.body.descricao,
      }

      const response = await PagamentoModel.create(pagamento);

      res.status(201).json({ response, msg: "Pagamento foi criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const pagamento = await PagamentoModel.find();
      res.json(pagamento);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const pagamento = await PagamentoModel.findById(id);

      if (!pagamento) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(pagamento);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedPagamentoServer = await PagamentoModel.findByIdAndDelete(id)

      if (!deletedPagamentoServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedPagamentoServer, msg: "Recibo foi excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const pagamento = {
      id: req.body.id,
      totalConta: req.body.totalConta,
      tipoPagamento: req.body.tipoPagamento,
      data: req.body.data,
      descricao: req.body.descricao,
    }
    const updatePagamentoService = await PagamentoModel.findByIdAndUpdate(id, pagamento);

    if (!updatePagamentoService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updatePagamentoService, msg: "Recibo atualizado com sucesso." });
  }
};

module.exports = PagamentoController;