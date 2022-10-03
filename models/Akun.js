var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Akun = koneksi.define('akun', {
       id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey:true
       },
       code: {
              type: Sequelize.STRING,
              allowNull: false
       },
       value: {
              type: Sequelize.STRING,
              allowNull: false
       }, 
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Akun;