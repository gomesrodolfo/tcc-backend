const router = require('express').Router()

const funcionarioController = require("../controllers/funcionarioController");

router.route("/funcionario").post((req, res) => funcionarioController.createMany(req, res));

router.route("/funcionario").post((req, res) => funcionarioController.create(req, res));

router.route("/funcionario").get((req, res) => funcionarioController.getAll(req, res));

router.route("/funcionario/:id").get((req, res) => funcionarioController.get(req, res));

router.route("/funcionario/:id").delete((req, res) => funcionarioController.delete(req, res));

router.route("/funcionario/:id").put((req, res) => funcionarioController.update(req, res));

module.exports = router;