module.exports = (server) => {
    const statController = require("../controllers/statsController");

    server.route("/stats/month/:month").get(statController.month);
    
}