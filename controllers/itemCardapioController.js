const { ItemCardapio: ItemCardapioModel } = require("../models/ItemCardapio");

const itemCardapioController = {
  create: async (req, res) => {
    try {
      const itemCardapio = {
        id: req.body.id,
        nome: req.body.nome,
        valor: req.body.valor,
        tempoPreparo: req.body.tempoPreparo,
        quantidade: req.body.quantidade,
        descricao: req.body.descricao,
      }

      const response = await ItemCardapioModel.create(itemCardapio);

      res.status(201).json({ response, msg: "Item criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const itemCardapioService = await ItemCardapioModel.find();
      res.json(itemCardapioService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const itemCardapioService = await ItemCardapioModel.findById(id);

      if (!itemCardapioService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(itemCardapioService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedItemServer = await ItemCardapioModel.findByIdAndDelete(id)

      if (!deletedItemServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedItemServer, msg: "Item excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const cardapio = {
      id: req.body.id,
      nome: req.body.nome,
      valor: req.body.valor,
      tempoPreparo: req.body.tempoPreparo,
      quantidade: req.body.quantidade,
      descricao: req.body.descricao
    }
    const updateItemService = await ItemCardapioModel.findByIdAndUpdate(id, cardapio);

    if (!updateCardapioService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateItemService, msg: "Item atualizado com sucesso." });
  }
};

module.exports = itemCardapioController;