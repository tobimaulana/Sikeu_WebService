var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Transaksi_Bayar_Detail = koneksi.define('transaksi_bayar_detail', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       transaksi_bayar_id: {
              type: Sequelize.BIGINT,
              allowNull: false
       },
       jenis_biaya: {
              type: Sequelize.STRING,
              allowNull: false
       },
       biaya_id: {
              type: Sequelize.BIGINT,
              allowNull: false
       }, 
       jumlah_bayar: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       keterangan: {
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
 
module.exports=Transaksi_Bayar_Detail;