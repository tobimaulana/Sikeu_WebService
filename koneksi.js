const Sequelize = require('sequelize');

const koneksi = new Sequelize('db_sikeu', 'root', '', {
       host: 'localhost',
       port: '3306',
       dialect: 'mariadb',
       dialectOptions:{
              useUTC:false, 
              timezone: "Etc/GMT+7"
       }
});

koneksi.authenticate().then(() => {
       console.log('Berhasil Konek ke Database');
}).catch(err => {
       console.error('Gagal Konek ke Database : ', err.message);
});

module.exports = koneksi;