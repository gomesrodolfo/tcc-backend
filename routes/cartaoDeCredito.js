const router = require('express').Router()

const cartaoDeCreditoController = require("../controllers/cartaoDeCreditoController");

router.route("/pagamento").post((req, res) => cartaoDeCreditoController.create(req, res));

router.route("/pagamento").get((req, res) => cartaoDeCreditoController.getAll(req, res));

router.route("/pagamento/:id").get((req, res) => cartaoDeCreditoController.get(req, res));

router.route("/pagamento/:id").delete((req, res) => cartaoDeCreditoController.delete(req, res));

router.route("/pagamento/:id").put((req, res) => cartaoDeCreditoController.update(req, res));

module.exports = router;