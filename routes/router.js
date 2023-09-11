const router = require('express').Router()

const servicesRestauranteRouter = require("./restaurante");
const servicesCardapioRouter = require("./cardapio");
const servicesCategoriaRouter = require("./categoriaCardapio");
const servicesItemCardapioRouter = require("./itemCardapio");
const servicesItemExtraCardapioRouter = require("./itemExtraCardapio");
const servicesClienteRouter = require("./cliente");
const servicesPedidoRouter = require("./pedido");
const servicesSituacaoPedidoRouter = require("./situacaoPedido");
const servicesTelefoneRouter = require("./telefones");
const servicesReciboRouter = require("./recibo");
const servicesPagamentoRouter = require("./pagamento");
const servicesReservaRouter = require("./reserva");
const servicesFuncionarioRouter = require("./funcionario");
const servicesCartaoDeCreditoRouter = require("./cartaoDeCredito");

router.use("/", servicesRestauranteRouter);
router.use("/", servicesCardapioRouter);
router.use("/", servicesCategoriaRouter);
router.use("/", servicesClienteRouter);
router.use("/", servicesFuncionarioRouter);

router.use("/categoria", servicesItemCardapioRouter);
router.use("/categoria/itemCardapio", servicesItemExtraCardapioRouter);

router.use("/cliente", servicesPedidoRouter);
router.use("/cliente", servicesTelefoneRouter);
router.use("/cliente", servicesReciboRouter);
router.use("/cliente", servicesPagamentoRouter);
router.use("/cliente", servicesReservaRouter);
router.use("/cliente", servicesCartaoDeCreditoRouter);
router.use("/cliente/pedido", servicesSituacaoPedidoRouter);

module.exports = router;