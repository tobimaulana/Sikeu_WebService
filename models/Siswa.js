var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Siswa = koneksi.define('siswa', {
       id: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       nis: {
              type: Sequelize.STRING,
              allowNull: false
       },
       nama: {
              type: Sequelize.STRING,
              allowNull: false
       },
       angkatan: {
              type: Sequelize.INTEGER,
              allowNull: false
       }, 
       jurusan: {
              type: Sequelize.BIGINT,
              allowNull: false
       },
       kelas: {
              type: Sequelize.STRING,
              allowNull: false
       },
       no_hp: {
              type: Sequelize.STRING,
              allowNull: false
       },
       du: {
              type: Sequelize.STRING,
              allowNull: false
       },
       password: {
              type: Sequelize.STRING,
              allowNull: false
       },
       status: {
              type: Sequelize.STRING,
              allowNull: false
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Siswa;