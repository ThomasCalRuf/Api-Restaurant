module.exports = (server) => {
    const userController = require("../controllers/usersController");
    const JWTMiddleware = require("../middlewares/authorization");

    server.route("/users")
    .get(userController.listAllUsers)
    .post(JWTMiddleware.verifyToken,userController.createUser);

    server.route("/users/:id")
    .all(JWTMiddleware.verifyToken)
    .get(userController.listAUser)
    .put(userController.updateAUser)
    .delete(userController.deleteAUser);
}