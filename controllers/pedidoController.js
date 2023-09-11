const { Pedido: PedidoModel } = require("../models/Pedido");

const pedidoController = {
  create: async (req, res) => {
    try {
      const pedido = {
        id: req.body.id,
        horaPedido:req.body.horaPedido,
        numeroPedido: req.body.numeroPedido,
        numeroMesa: req.body.numeroMesa,
        descricao: req.body.descricao,
      }

      const response = await PedidoModel.create(pedido);

      res.status(201).json({ response, msg: "O pedido foi criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const pedido = await PedidoModel.find();
      res.json(pedido);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const pedido = await PedidoModel.findById(id);

      if (!pedido) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(pedido);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedPedidoServer = await PedidoModel.findByIdAndDelete(id)

      if (!deletedPedidoServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedPedidoServer, msg: "Pedido foi excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const pedido = {
      id: req.body.id,
      horaPedido:req.body.horaPedido,
      numeroPedido: req.body.numeroPedido,
      numeroMesa: req.body.numeroMesa,
      descricao: req.body.descricao,
    }
    const updatePedidoService = await PedidoModel.findByIdAndUpdate(id, pedido);

    if (!updatePedidoService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updatePedidoService, msg: "Pedido atualizado com sucesso." });
  }
};

module.exports = pedidoController;