const express = require('express');
require('dotenv').config();

const sequelize= require('./api/config/database')

const hostname =process.env.HOSTNAME_SERVER;
const port=process.env.PORT_SERVER;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

sequelize.sync().then(()=>{
    server.listen(port, hostname, ()=> {
        console.log(`Serveur qui tourne sur le port ${port}`);
    })
})