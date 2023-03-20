module.exports = (server) => {
    const userController = require("../controllers/usersController");

    server.route("/users")
    .get(userController.listAllUsers)
    .post(userController.createUser);

    server.route("/users/:id")
    .get(userController.listAUser)
    .put(userController.updateAUser)
    .delete(userController.deleteAUser);
}