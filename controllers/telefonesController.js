const { Telefone: TelefoneModel } = require("../models/Telefones");

const telefoneController = {
  create: async (req, res) => {
    try {
      const telefone = {
        id: req.body.id,
        telefone: req.body.telefone,
      }

      const response = await TelefoneModel.create(telefone);

      res.status(201).json({ response, msg: "Telefone foi criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const telefoneService = await TelefoneModel.find();
      res.json(telefoneService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const telefoneService = await TelefoneModel.findById(id);

      if (!telefoneService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(telefoneService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedTelefoneServer = await TelefoneModel.findByIdAndDelete(id)

      if (!deletedTelefoneServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedTelefoneServer, msg: "Telefone foi excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const updateTelefone = {
      id: req.body.id,
      telefone: req.body.telefone
    }
    const updateTelefoneService = await TelefoneModel.findByIdAndUpdate(id, updateTelefone);

    if (!updateTelefoneService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateTelefoneService, msg: "Telefone atualizado com sucesso." });
  }
};

module.exports = telefoneController;