const router = require('express').Router()

const reservaController = require("../controllers/reservaController");

router.route("/reserva").post((req, res) => reservaController.create(req, res));

router.route("/reserva").get((req, res) => reservaController.getAll(req, res));

router.route("/reserva/:id").get((req, res) => reservaController.get(req, res));

router.route("/reserva/:id").delete((req, res) => reservaController.delete(req, res));

router.route("/reserva/:id").put((req, res) => reservaController.update(req, res));

module.exports = router;