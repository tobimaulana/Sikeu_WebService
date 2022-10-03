var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const User = koneksi.define('user',
       {
              id: {
                     type:Sequelize.INTEGER,
                     allowNull:false,
                     primaryKey:true
              },
              nama: {
                     type:Sequelize.STRING,
                     allowNull:false
              },
              level: {
                     type:Sequelize.STRING,
                     allowNull:false
              },
       },
       {
              timestamps:true,
              freezeTableName:true
       }
       );

       module.exports=User;