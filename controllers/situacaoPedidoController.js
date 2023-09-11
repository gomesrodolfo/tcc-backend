const { SituacaoPedido: SituacaoPedidoModel } = require("../models/SituacaoPedido");

const situacaoPedidoController = {
  create: async (req, res) => {
    try {
      const situacaoPedido = {
        id: req.body.id,
        descricao: req.body.descricao,
      }

      const response = await SituacaoPedidoModel.create(situacaoPedido);

      res.status(201).json({ response, msg: "A situação do pedido foi criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const situacaPedidoService = await SituacaoPedidoModel.find();
      res.json(situacaPedidoService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const situacaPedidoService = await SituacaoPedidoModel.findById(id);

      if (!situacaPedidoService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(situacaPedidoService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedSituacaoServer = await SituacaoPedidoModel.findByIdAndDelete(id)

      if (!deletedSituacaoServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedSituacaoServer, msg: "Situação do pedido foi excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const situacaoPedido = {
      id: req.body.id,
      descricao: req.body.descricao
    }
    const updateSituacaoService = await SituacaoPedidoModel.findByIdAndUpdate(id, situacaoPedido);

    if (!updateSituacaoService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateSituacaoService, msg: "Cardápio atualizado com sucesso." });
  }
};

module.exports = situacaoPedidoController;