const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'seller_app','root','mysql123',{
    dialect:'mysql',
    host:'localhost'
  }
);

module.exports = sequelize;