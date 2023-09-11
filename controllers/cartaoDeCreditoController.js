const { CartaoDeCredito: CartaoDeCreditoModel } = require("../models/CartaoDeCredito");

const cartaoDeCreditoController = {
  create: async (req, res) => {
    try {
      const cartaoDeCredito = {
        id: req.body.id,
        valor: req.body.valor,
        nome: req.body.nome,
        data: req.body.data,
      }

      const response = await CartaoDeCreditoModel.create(cartaoDeCredito);

      res.status(201).json({ response, msg: "Cardapio criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const cartaoDeCredito = await CartaoDeCreditoModel.find();
      res.json(cartaoDeCredito);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const cartaoDeCredito = await CartaoDeCreditoModel.findById(id);

      if (!cartaoDeCredito) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(cartaoDeCredito);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedcartaoDeCreditoServer = await CartaoDeCreditoModel.findByIdAndDelete(id)

      if (!deletedcartaoDeCreditoServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedcartaoDeCreditoServer, msg: "Cardápio excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const cartaoDeCredito = {
      id: req.body.id,
      valor: req.body.valor,
      nome: req.body.nome,
      data: req.body.data,
    }
    const updateCartaoDeCreditoService = await CartaoDeCreditoModel.findByIdAndUpdate(id, cartaoDeCredito);

    if (!updateCartaoDeCreditoService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateCartaoDeCreditoService, msg: "Cartão de credito atualizado com sucesso." });
  }
};

module.exports = cartaoDeCreditoController;