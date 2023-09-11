const router = require('express').Router()

const itemExtraCardapioController = require("../controllers/itemExtraCardapio");

router.route("/itemExtraCardapio").post((req, res) => itemExtraCardapioController.create(req, res));

router.route("/itemExtraCardapio").get((req, res) => itemExtraCardapioController.getAll(req, res));

router.route("/itemExtraCardapio/:id").get((req, res) => itemExtraCardapioController.get(req, res));

router.route("/itemExtraCardapio/:id").delete((req, res) => itemExtraCardapioController.delete(req, res));

router.route("/itemExtraCardapio/:id").put((req, res) => itemExtraCardapioController.update(req, res));

module.exports = router;