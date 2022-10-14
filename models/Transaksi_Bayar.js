var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Transaksi_Bayar = koneksi.define('transaksi_bayar', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       no_pend: {
              type: Sequelize.STRING,
              allowNull: false
       },
       total: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       keterangan: {
              type: Sequelize.STRING,
              allowNull: false
       }, 
       tanggal: {
              type: Sequelize.DATE,
              allowNull: false
       },
       username: {
              type: Sequelize.STRING      ,
              allowNull: false
       },
},
{
       paranoid:true,
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Transaksi_Bayar;