var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Kelas = koneksi.define('kelas', {
       id: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       kode_kelas: {
              type: Sequelize.STRING,
              allowNull: false
       },
       jurusan: {
              type: Sequelize.BIGINT,
              allowNull: false
       }, 
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Kelas;