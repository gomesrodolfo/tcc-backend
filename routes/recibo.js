const router = require('express').Router()

const reciboController = require("../controllers/reciboController");

router.route("/recibo").post((req, res) => reciboController.create(req, res));

router.route("/recibo").get((req, res) => reciboController.getAll(req, res));

router.route("/recibo/:id").get((req, res) => reciboController.get(req, res));

router.route("/recibo/:id").delete((req, res) => reciboController.delete(req, res));

router.route("/recibo/:id").put((req, res) => reciboController.update(req, res));

module.exports = router;