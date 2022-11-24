var express = require('express');
var router = express.Router();
const cekToken = require("../middleware");

// Panggil Model Angkatan
var Angkatan = require('../models/Angkatan');

/* TAMPIL DATA */
router.get('/', cekToken, function(req, res, next) {
       Angkatan.findAll().then( data => {
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
router.post('/', cekToken, function(req, res, next) {
       Angkatan.create(req.body).then( data => {
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
router.put('/', cekToken, function(req, res, next) {
       Angkatan.update(req.body, {
              where:{tahun:req.body.tahun}
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
router.delete('/', cekToken, function(req, res, next) {
       Angkatan.destroy({
              where:{tahun:req.body.tahun}
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