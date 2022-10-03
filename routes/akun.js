var express = require('express');
var router = express.Router();

// Panggil Model Akun
var Akun = require('../models/Akun');

/* TAMPIL DATA */
router.get('/', function(req, res, next) {
       Akun.findAll().then( data => {
              res.json({
                     status:true,
                     pesan:"Berhasil Tampil",
                     data:data
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Tampil : " + err.message,
                     data:[]
              });
       });
});

/* TAMBAH DATA */
router.post('/', function(req, res, next) {
       Akun.create(req.body).then( data => {
              res.json({
                     status:true,
                     pesan:"Berhasil Tambah",
                     data:data
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Tambah : " + err.message,
                     data:[]
              });
       });
});

/* UBAH DATA */
router.put('/', function(req, res, next) {
       Akun.update(req.body, {
              where:{id:req.body.id}
       }).then( () => {
              res.json({
                     status:true,
                     pesan:"Berhasil Ubah",
                     data: []
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Ubah : " + err.message,
                     data:[]
              });
       });
});

/* HAPUS DATA */
router.delete('/', function(req, res, next) {
       Akun.destroy({
              where:{id:req.body.id}
       }).then( () => {
              res.json({
                     status:true,
                     pesan:"Berhasil Hapus",
                     data: []
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Hapus : " + err.message,
                     data:[]
              });
       });
});

module.exports = router;