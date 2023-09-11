const router = require('express').Router()

const cardapioController = require("../controllers/cardapioController");

router.route("/cardapio").post((req, res) => cardapioController.create(req, res));

router.route("/cardapio").get((req, res) => cardapioController.getAll(req, res));

router.route("/cardapio/:id").get((req, res) => cardapioController.get(req, res));

router.route("/cardapio/:id").delete((req, res) => cardapioController.delete(req, res));

router.route("/cardapio/:id").put((req, res) => cardapioController.update(req, res));

module.exports = router;