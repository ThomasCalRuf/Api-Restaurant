module.exports = (server) => {
    const tipsController = require("../controllers/tipsController");

    server.route("/service/:id_service/table")
    .get(tipsController.listAllTables)
    .post(tipsController.createTable);

    server.route("/tips/:id")
    .get(tipsController.listATips)
    .put(tipsController.updateTips)
    .delete(tipsController.deleteTips);
}