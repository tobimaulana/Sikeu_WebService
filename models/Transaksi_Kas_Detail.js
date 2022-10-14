var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Transaksi_Kas_Detail = koneksi.define('transaksi_kas_detail', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       transaksi_kas_id: {
              type: Sequelize.BIGINT,
              allowNull: false
       },
       akun_id: {
              type: Sequelize.BIGINT,
              allowNull: false
       },
       jumlah: {
              type: Sequelize.DOUBLE,
              allowNull: false
       }, 
       keterangan: {
              type: Sequelize.STRING,
              allowNull: false
       }
},
{
       paranoid:true,
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Transaksi_Kas_Detail;