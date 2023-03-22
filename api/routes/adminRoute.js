module.exports = (server)=>{
    const adminController = require("../controllers/adminController");

    server.post("/admin/login",adminController.login);
}