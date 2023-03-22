const express = require('express');
require('dotenv').config();

const sequelize= require('./api/config/database')

const hostname =process.env.HOSTNAME_SERVER;
const port=process.env.PORT_SERVER;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = {
    definition: {
      info: {
        title: 'Api RESTaurant',
        contact: {
          name: 'Thomas Calvete Ruffier',
        },
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Serveur local',
        },
      ],
    },
    apis: ['./api/routes/swagger.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const userRoute = require("./api/routes/usersRoute");
userRoute(server);

const serviceRoute = require("./api/routes/serviceRoute");
serviceRoute(server);

const tipsRoute = require("./api/routes/tipsRoute");
tipsRoute(server);

const adminRoute = require("./api/routes/adminRoute");
adminRoute(server);

const statsRoute = require("./api/routes/statsRoute");
statsRoute(server);

sequelize.sync().then(()=>{
    server.listen(port, hostname, ()=> {
        console.log(`Serveur qui tourne sur le port ${port}`);
    })
})