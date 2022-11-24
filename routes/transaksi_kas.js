var express = require('express');
var router = express.Router();
var cekToken = require("../middleware");

// Menambahkan import middleware_app
var appToken = require("../middleware_app");

var koneksi = require("../koneksi");
var TransaksiKas = require('../models/Transaksi_Kas');
var TransaksiKasDetail = require('../models/Transaksi_Kas_Detail');

router.get('/', cekToken, function(req, res, next) {
       TransaksiKas.findAll().then( data => {
              res.json({
                     status:true,
                     pesan:"Berhasil Tampil",
                     data:data
              });
       }).catch( err => {
              res.json({
                     status:false,
                     pesan:"Gagal Tampil : " + err.message,
                     data:[]
              });
       });
});

router.post('/', cekToken, function(req, res, next) {

       //buat variabel untuk transaksi baru
       var TransaksiKasBaru = {
              id: req.body.id,
              jenis_kas: req.body.jenis_kas, 
              kode_bukti: req.body.kode_bukti,  
              tanggal:req.body.tanggal, 
              total:req.body.total,
              keterangan:req.body.keterangan,
              username:req.nama //menambahkan nama
       };

       //menggunakan metode transaction
       koneksi.transaction().then(function (t) {

              TransaksiKas.create(TransaksiKasBaru, {transaction : t}).then( data => {

                     //update transaksi_kas_id di req.body.detail
                     Promise.all(
                            req.body.detail.map( async (item)=>{
                                   item.transaksi_kas_id = data.id
                            })
                     );

                     TransaksiKasDetail.bulkCreate(req.body.detail,{transaction: t}).then( dataDetail=>{
                            t.commit(); //simpan permanen
            
                            res.json({
                                status:true, 
                                pesan:"Berhasil Transaksi",
                                data:data, 
                                detail:dataDetail
                            });
                     }).catch(err => {
                            t.rollback(); //batalkan simpan
                            res.json({
                                   status: false,
                                   pesan: "Gagal Transaksi Detail: " + err.message,
                                   data:[]
                            });
                     });
              }).catch(err => {
                     t.rollback(); //batalkan simpan
                     res.json({
                            status: false,
                            pesan: "Gagal Transaksi: " + err.message,
                            data:[]
                     });
              });
       });
});

router.delete('/', function(req,res,next){

       koneksi.transaction().then(function (t) {
              TransaksiKas.destroy({
                     where:{id:req.body.id}
              }, { 
                     transaction: t
              }).then( () => {
                  
                  TransaksiKasDetail.destroy({
                      where:{transaksi_kas_id:req.body.id}
                  },{
                      transaction: t
                  }).then( data => {
      
                      t.commit(); //hapus permanen
                      res.json({ 
                          status:true, 
                          pesan:"Berhasil menghapus data transaksi kas" 
                      });
                  }).catch(err =>{
                      t.rollback(); //batalkan hapus
                      res.json({ 
                          status:true,
                           pesan:err.message 
                      });
                  });
      
              }).catch( err=>{
                  t.rollback(); //batalkan hapus 
                  res.json({
                      status: false,
                      pesan: "Gagal Hapus: " + err.message 
                     });
              });
          });
});

// Menambahkan fungsi di routes/transaksi_kas.js untuk validasi pembayaran berdasarkan id_biaya dan no_pend/id siswa
// Menambahkan method GET dengan parameter : no_pend, jenis_biaya, dan id_biaya
router.get('/validasi/:no_pend/:jenis_biaya/:id_biaya', appToken, function(req, res, next){

       var no_pend = req.params.no_pend;
       var jenis_biaya = req.params.jenis_biaya;
       var id_biaya = req.params.id_biaya;

       ViewBayar.findAll({
              where:{
                     no_pend:no_pend,
                     jenis_biaya:jenis_biaya,
                     biaya_id:id_biaya
              }
       }).then( data => {
              res.json({
                     status:true,
                     pesan:"Berhasil Tampil",
                     data:data
              });
       }).catch( err => {
              res.json({
                     status:false,
                     pesan: "Gagal Tampil : " + err.message,
                     data:[]
              });
       });
});

module.exports = router;