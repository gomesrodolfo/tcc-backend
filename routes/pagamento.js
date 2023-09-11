const router = require('express').Router()

const pagamentoController = require("../controllers/pagamentoController");

router.route("/pagamento").post((req, res) => pagamentoController.create(req, res));

router.route("/pagamento").get((req, res) => pagamentoController.getAll(req, res));

router.route("/pagamento/:id").get((req, res) => pagamentoController.get(req, res));

router.route("/pagamento/:id").delete((req, res) => pagamentoController.delete(req, res));

router.route("/pagamento/:id").put((req, res) => pagamentoController.update(req, res));

module.exports = router;