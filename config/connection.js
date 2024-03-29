const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, "", {
  host: process.DB_SERVERNAME,
  dialect: "mariadb",
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
