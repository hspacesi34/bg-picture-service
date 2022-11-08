/**
 * Imports
 */
 const express = require('express');
 const app = express();
 const bp = require('body-parser');
 const cors = require('cors');
 const sequelize = require('./DBConnection')


const PictureRoutes = require('./src/routes/PictureRoutes');
 /**
  * Configurer l'app
  */

 app.use(cors());
 app.use(bp.json());
 
app.use('/picture', PictureRoutes);

 
 app.get("/", (req, res) =>{
    sequelize.authenticate().then(() => {
       console.log('Connection has been established successfully.');
      }).catch((error) => {
         console.error('Unable to connect to the database: ', error);
      });
      res.send("oui ca marche");
      // sequelize.sync();
 })
 
 
 module.exports = app;