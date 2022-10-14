var express = require('express');
var router = express.Router();
var cekToken = require("../middleware");

var koneksi = require("../koneksi");
var TransaksiBayar = require('../models/Transaksi_Bayar');
var TransaksiBayarDetail = require('../models/Transaksi_Bayar_Detail');

router.get('/', cekToken, function(req, res, next) {
       TransaksiBayar.findAll().then( data => {
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
       var transaksiBayarBaru = {
              no_pend: req.body.no_pend, 
              total: req.body.total, 
              keterangan: req.body.keterangan, 
              tanggal:req.body.tanggal, 
              username:req.nama //menambahkan nama
       };

       //menggunakan metode transaction
       koneksi.transaction().then(function (t) {

              TransaksiBayar.create(transaksiBayarBaru, {transaction : t}).then( data => {

                     //update transaksi_bayar_id di req.body.detail
                     Promise.all(
                            req.body.detail.map( async (item)=>{
                                   item.transaksi_bayar_id = data.id
                            })
                     );

                     TransaksiBayarDetail.bulkCreate(req.body.detail,{transaction: t}).then( dataDetail=>{
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
              TransaksiBayar.destroy({
                     where:{id:req.body.id}
              }, { 
                     transaction: t
              }).then( () => {
                  
                  TransaksiBayarDetail.destroy({
                      where:{transaksi_bayar_id:req.body.id}
                  },{
                      transaction: t
                  }).then( data => {
      
                      t.commit(); //hapus permanen
                      res.json({ 
                          status:true, 
                          pesan:"Berhasil menghapus data transaksi bayar" 
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

module.exports = router;