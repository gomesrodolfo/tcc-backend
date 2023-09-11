const router = require('express').Router()

const itemCardapioController = require("../controllers/itemCardapioController");

router.route("/itemCardapio").post((req, res) => itemCardapioController.create(req, res));

router.route("/itemCardapio").get((req, res) => itemCardapioController.getAll(req, res));

router.route("/itemCardapio/:id").get((req, res) => itemCardapioController.get(req, res));

router.route("/itemCardapio/:id").delete((req, res) => itemCardapioController.delete(req, res));

router.route("/itemCardapio/:id").put((req, res) => itemCardapioController.update(req, res));

module.exports = router;