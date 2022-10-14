var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Transaksi_Kas = koneksi.define('transaksi_kas', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       jenis_kas: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       kode_bukti: {
              type: Sequelize.STRING,
              allowNull: false
       },
       tanggal: {
              type: Sequelize.DATE,
              allowNull: false
       }, 
       total: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       keterangan: {
              type: Sequelize.STRING      ,
              allowNull: false
       },
       username: {
              type: Sequelize.STRING      ,
              allowNull: false
       }
},
{
       paranoid:true,
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Transaksi_Kas;