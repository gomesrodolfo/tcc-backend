const { Restaurante: RestauranteModel } = require("../models/Restaurante");

const restauranteController = {
  create: async (req, res) => {
    try {
      const restaurante = {
        id: req.body.id,
        cnpj: req.body.cnpj,
        nome: req.body.nome,
        numeroTelefone: req.body.numeroTelefone,
        descricao: req.body.descricao,
      }

      const response = await RestauranteModel.create(restaurante);

      res.status(201).json({ response, msg: "Cardapio criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const restauranteServer = await RestauranteModel.find();
      res.json(restauranteServer);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const restauranteServer = await RestauranteModel.findById(id);

      if (!restauranteServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(restauranteServer);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedRestauranteServer = await RestauranteModel.findByIdAndDelete(id)

      if (!deletedRestauranteServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedRestauranteServer, msg: "Dados do restaurante excluídos com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const restaurante = {
      id: req.body.id,
      cnpj: req.body.cnpj,
      nome: req.body.nome,
      numeroTelefone: req.body.numeroTelefone,
      descricao: req.body.descricao,
    }

    const updateRestauranteService = await RestauranteModel.findByIdAndUpdate(id, restaurante);

    if (!updateRestauranteService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateRestauranteService, msg: "Dados do restaurante atualizados com sucesso." });
  }
};

module.exports = restauranteController;