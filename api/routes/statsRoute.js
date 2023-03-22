module.exports = (server) => {
    const statController = require("../controllers/statsController");
    const JWTMiddleware = require("../middlewares/authorization");

    server.route("/stats/month/:month").get(JWTMiddleware.verifyToken,statController.month);
    
}