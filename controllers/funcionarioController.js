const { Funcionario: FuncionarioModel } = require("../models/Funcionario");

const funcionarioController = {
  createMany: async (req, res) => {
    try {
      const funcionarios = req.body;

      // if (!Array.isArray(funcionarios)) {
      //   res.status(400).json({ msg: "Requisição deve conter uma lista de funcionarios." });
      //   return;
      // }

      const response = await FuncionarioModel.insertMany(funcionarios);

      res.status(201).json({ response, msg: "Funcionarios criados com sucesso!" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao criar funcionarios." });
    }
  },
  create: async (req, res) => {
    try {
      const funcionario = {
        id: req.body.id,
        nome: req.body.nome,
        cpf: req.body.cpf,
      }

      const response = await FuncionarioModel.create(funcionario);

      res.status(201).json({ response, msg: "Funcionario criado com sucesso!" });

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const funcionarioService = await FuncionarioModel.find();
      res.json(funcionarioService);

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const funcionarioService = await FuncionarioModel.findById(id);

      if (!funcionarioService) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.json(funcionarioService);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedFuncionarioServer = await FuncionarioModel.findByIdAndDelete(id)

      if (!deletedFuncionarioServer) {
        res.status(404).json({ msg: "Item não encontrado." });
        return;
      }

      res.status(200).json({ deletedFuncionarioServer, msg: "Funcionario excluído com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const funcionario = {
      id: req.body.id,
      nome: req.body.nome,
      cpf: req.body.cpf,
    }

    const updateFuncionarioService = await FuncionarioModel.findByIdAndUpdate(id, funcionario);

    if (!updateFuncionarioService) {
      res.status(404).json({ msg: "Item não encontrado." });
      return;
    }

    res.status(200).json({ updateFuncionarioService, msg: "Funcionario atualizado com sucesso." });
  }
};

module.exports = funcionarioController;