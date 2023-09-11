const router = require('express').Router()

const situacaoPedidoController = require("../controllers/situacaoPedidoController");

router.route("/situacaoPedido").post((req, res) => situacaoPedidoController.create(req, res));

router.route("/situacaoPedido").get((req, res) => situacaoPedidoController.getAll(req, res));

router.route("/situacaoPedido/:id").get((req, res) => situacaoPedidoController.get(req, res));

router.route("/situacaoPedido/:id").delete((req, res) => situacaoPedidoController.delete(req, res));

router.route("/situacaoPedido/:id").put((req, res) => situacaoPedidoController.update(req, res));

module.exports = router;