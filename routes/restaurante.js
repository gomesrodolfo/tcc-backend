const router = require('express').Router()

const restauranteController = require("../controllers/restauranteController");

router.route("/restaurante").post((req, res) => restauranteController.create(req, res));

router.route("/restaurante").get((req, res) => restauranteController.getAll(req, res));

router.route("/restaurante/:id").get((req, res) => restauranteController.get(req, res));

router.route("/restaurante/:id").delete((req, res) => restauranteController.delete(req, res));

router.route("/restaurante/:id").put((req, res) => restauranteController.update(req, res));

module.exports = router;