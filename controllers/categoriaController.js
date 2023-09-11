const { CategoriaCardapio: CategoriaCardapioModel } = require("../models/CategoriaCardapio");

const categoriaCardapioController = {
  create: async (req, res) => {
    try {
      const categoriaCardapio = {
        id: req.body.id,
        comida: req.body.comida,
        bebida: req.body.bebida,
        descricao: req.body.descricao,
      }

      const response = await CategoriaCardapioModel.create(categoriaCardapio);

      res.status(201).json({ response, msg: "Categoria de cardapio criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const categoriaCardapioService = await CategoriaCardapioModel.find();
      res.json(categoriaCardapioService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const categoriaCardapioService = await CategoriaCardapioModel.findById(id);

      if (!categoriaCardapioService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(categoriaCardapioService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedCategoriaCardapioServer = await CategoriaCardapioModel.findByIdAndDelete(id)

      if (!deletedCategoriaCardapioServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedCategoriaCardapioServer, msg: "Categoria de cardápio excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const categoriaCardapio = {
      id: req.body.id,
      descricao: req.body.descricao
    }
    const updateCategoriaCardapioService = await CategoriaCardapioModel.findByIdAndUpdate(id, categoriaCardapio);

    if (!updateCategoriaCardapioService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateCategoriaCardapioService, msg: "Categoria de cardápio atualizado com sucesso." });
  }
};

module.exports = categoriaCardapioController;