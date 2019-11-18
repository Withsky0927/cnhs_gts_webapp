const Sequelize = require("sequelize");
const connection = require("../config/connection");

const AccountModel = connection.define("accounts", {
  account_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  account_role: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    unique: true
  },
  lrn: {
    type: Sequelize.STRING(15),
    allowNull: false,
    unique: true
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(1024),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true
  },
  mobile: {
    type: Sequelize.INTEGER(20),
    allowNull: false
  },
  approved_status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  date_approved: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = AccountModel;
