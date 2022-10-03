var express = require('express');
var router = express.Router();

// Panggil Model Biaya_Tetap
var Biaya_Tetap = require('../models/Biaya_Tetap');

/* TAMPIL DATA */
router.get('/', function(req, res, next) {
       Biaya_Tetap.findAll().then( data => {
              res.json({
                     status:true,
                     pesan:"Data BERHASIL Tampil",
                     data:data
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Data GAGAL Tampil : " + err.message,
                     data:[]
              });
       });
});

/* TAMBAH DATA */
router.post('/', function(req, res, next) {
       Biaya_Tetap.create(req.body).then( data => {
              res.json({
                     status:true,
                     pesan:"Data BERHASIL Ditambahkan",
                     data:data
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Data GAGAL Ditambahkan : " + err.message,
                     data:[]
              });
       });
});

/* UBAH DATA */
router.put('/', function(req, res, next) {
       Biaya_Tetap.update(req.body, {
              where:{id:req.body.id}
       }).then( () => {
              res.json({
                     status:true,
                     pesan:"Data BERHASIL Diubah",
                     data: []
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Data GAGAL Diubah : " + err.message,
                     data:[]
              });
       });
});

/* HAPUS DATA */
router.delete('/', function(req, res, next) {
       Biaya_Tetap.destroy({
              where:{id:req.body.id}
       }).then( () => {
              res.json({
                     status:true,
                     pesan:"Data BERHASIL Dihapus",
                     data: []
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Data GAGAL Dihapus : " + err.message,
                     data:[]
              });
       });
});

module.exports = router;