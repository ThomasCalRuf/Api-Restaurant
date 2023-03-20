module.exports = (server) => {
    const serviceController = require("../controllers/serviceController");

    server.route("/service")
    .get(serviceController.listAllServices)
    .post(serviceController.createService);

    server.route("/service/:id")
    .get(serviceController.listAService)
    .put(serviceController.updateAService)
    .delete(serviceController.deleteAService);
}