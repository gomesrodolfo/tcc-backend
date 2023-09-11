const router = require('express').Router()

const clienteController = require("../controllers/clienteController");

router.route("/cliente").post((req, res) => clienteController.createMany(req, res));

router.route("/cliente").post((req, res) => clienteController.create(req, res));

router.route("/cliente").get((req, res) => clienteController.getAll(req, res));

router.route("/cliente/:id").get((req, res) => clienteController.get(req, res));

router.route("/cliente/:id").delete((req, res) => clienteController.delete(req, res));

router.route("/cliente/:id").put((req, res) => clienteController.update(req, res));

module.exports = router;