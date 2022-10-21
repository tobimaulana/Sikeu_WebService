const Sequelize = require('sequelize');
var koneksi = require("../koneksi");
var ViewBayar = koneksi.define('view_bayar', {
       id                   : { type: Sequelize.BIGINT, primaryKey: true },
       no_pend              : Sequelize.STRING, 
       username             : Sequelize.STRING, 
       nis                  : Sequelize.STRING, 
       nama                 : Sequelize.STRING, 
       kode_kelas           : Sequelize.STRING, 
       nama_jurusan         : Sequelize.STRING, 
       tahun                : Sequelize.INTEGER, 
       status               : Sequelize.STRING, 
       total                : Sequelize.DOUBLE, 
       keterangan           : Sequelize.STRING, 
       tanggal              : Sequelize.DATE, 
       username             : Sequelize.STRING, 
       jenis_biaya          : Sequelize.STRING, 
       nama_biaya           : Sequelize.STRING, 
       jumlah_bayar         : Sequelize.DOUBLE, 
       keterangan_detail    : Sequelize.STRING,
       biaya_id             : Sequelize.BIGINT, 
       kode                 : Sequelize.STRING, 
       nama_akun            : Sequelize.STRING, 
       jenis_transaksi      : Sequelize.STRING, 
       createdAt            : Sequelize.DATE, 
       updatedAt            : Sequelize.DATE, 
       deletedAt            : Sequelize.DATE
},{
       tableName : "view_bayar"
});

module.exports = ViewBayar;