const { Reserva: ReservaModel } = require("../models/Reserva");

const ReservaController = {
  create: async (req, res) => {
    try {
      const reserva = {
        id: req.body.id,
        data: req.body.data,
        nome: req.body.nome,
        numeroMesa: req.body.numeroMesa,
        descricao: req.body.descricao,
      }

      const response = await ReservaModel.create(reserva);

      res.status(201).json({ response, msg: "Reserva foi criada com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const reserva = await ReservaModel.find();
      res.json(reserva);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const reserva = await ReservaModel.findById(id);

      if (!reserva) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(reserva);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedReservaServer = await ReservaModel.findByIdAndDelete(id)

      if (!deletedReservaServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedReservaServer, msg: "Reserva foi excluída com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const reserva = {
      id: req.body.id,
      data: req.body.data,
      nome: req.body.nome,
      numeroMesa: req.body.numeroMesa,
      descricao: req.body.descricao,
    }
    
    const updateReservaService = await ReservaModel.findByIdAndUpdate(id, reserva);

    if (!updateReservaService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateReservaService, msg: "Reserva atualizado com sucesso." });
  }
};

module.exports = ReservaController;