const router = require('express').Router()

const telefoneController = require("../controllers/telefonesController");

router.route("/telefones").post((req, res) => telefoneController.create(req, res));

router.route("/telefones").get((req, res) => telefoneController.getAll(req, res));

router.route("/telefones/:id").get((req, res) => telefoneController.get(req, res));

router.route("/telefones/:id").delete((req, res) => telefoneController.delete(req, res));

router.route("/telefones/:id").put((req, res) => telefoneController.update(req, res));

module.exports = router;