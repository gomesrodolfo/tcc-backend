const { ItemExtraCardapio: ItemExtraCardapioModel } = require("../models/ItemExtraCardapio");

const itemExtraCardapioController = {
  create: async (req, res) => {
    try {
      const itemExtraCardapio = {
        id: req.body.id,
        descricao: req.body.descricao,
      }

      const response = await ItemExtraCardapioModel.create(itemExtraCardapio);

      res.status(201).json({ response, msg: "Item criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const itemExtraService = await ItemExtraCardapioModel.find();
      res.json(itemExtraService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const itemExtraService = await ItemExtraCardapioModel.findById(id);

      if (!itemExtraService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(itemExtraService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedItemExtraCardapioServer = await ItemExtraCardapioModel.findByIdAndDelete(id)

      if (!deletedItemExtraCardapioServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedItemExtraCardapioServer, msg: "Item excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const itemExtraCardapio = {
      id: req.body.id,
      descricao: req.body.descricao
    }
    const updateItemExtraCardapioService = await ItemExtraCardapioModel.findByIdAndUpdate(id, itemExtraCardapio);

    if (!updateItemExtraCardapioService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateItemExtraCardapioService, msg: "Item atualizado com sucesso." });
  }
};

module.exports = itemExtraCardapioController;