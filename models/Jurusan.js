var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Jurusan = koneksi.define('jurusan', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       nama_jurusan: {
              type: Sequelize.STRING,
              allowNull: false
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Jurusan;