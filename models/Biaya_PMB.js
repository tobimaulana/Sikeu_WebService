var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Biaya_PMB = koneksi.define('biaya_pmb', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       akun_id: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       nama_biaya: {
              type: Sequelize.STRING,
              allowNull: false
       },
       jumlah: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       tahun_angkatan: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       gelombang: {
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
 
module.exports=Biaya_PMB;