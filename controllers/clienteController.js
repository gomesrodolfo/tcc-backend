const { Cliente: ClienteModel } = require("../models/Cliente");

const clienteController = {
  createMany: async (req, res) => {
    try {
      const clientes = req.body; // Agora req.body deve ser uma lista de clientes em formato JSON

      // if (!Array.isArray(clientes)) {
      //   res.status(400).json({ msg: "Requisição deve conter uma lista de clientes." });
      //   return;
      // }

      const response = await ClienteModel.insertMany(clientes);

      res.status(201).json({ response, msg: "Clientes criados com sucesso!" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao criar clientes." });
    }
  },
  create: async (req, res) => {
    try {
      const cliente = {
        id: req.body.id,
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
      }

      const response = await ClienteModel.create(cliente);

      res.status(201).json({ response, msg: "Cliente criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const clienteService = await ClienteModel.find();
      res.json(clienteService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const clienteService = await ClienteModel.findById(id);

      if (!clienteService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(clienteService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedClienteServer = await ClienteModel.findByIdAndDelete(id)

      if (!deletedClienteServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedClienteServer, msg: "Cliente excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const cliente = {
      id: req.body.id,
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
    }
    const updateClienteService = await ClienteModel.findByIdAndUpdate(id, cliente);

    if (!updateClienteService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateClienteService, msg: "Cliente atualizado com sucesso." });
  }
};

module.exports = clienteController;