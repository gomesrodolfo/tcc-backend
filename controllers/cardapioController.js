const { Cardapio: CardapioModel } = require("../models/Cardapio");

const cardapioController = {
  create: async (req, res) => {
    try {
      const cardapio = {
        id: req.body.id,
        descricao: req.body.descricao,
      }

      const response = await CardapioModel.create(cardapio);

      res.status(201).json({ response, msg: "Cardapio criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const cardapioService = await CardapioModel.find();
      res.json(cardapioService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const cardapioService = await CardapioModel.findById(id);

      if (!cardapioService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(cardapioService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedCardapioServer = await CardapioModel.findByIdAndDelete(id)

      if (!deletedCardapioServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedCardapioServer, msg: "Cardápio excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const cardapio = {
      id: req.body.id,
      descricao: req.body.descricao
    }
    const updateCardapioService = await CardapioModel.findByIdAndUpdate(id, cardapio);

    if (!updateCardapioService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateCardapioService, msg: "Cardápio atualizado com sucesso." });
  }
};

module.exports = cardapioController;