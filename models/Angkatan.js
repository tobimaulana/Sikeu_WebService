var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Angkatan = koneksi.define('angkatan', {
       tahun: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey:true
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);

module.exports=Angkatan;