const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  host: `${process.env.DB_SERVERNAME}`,
  port: 3306,
  user: `${process.env.DB_USER}`,
  password: "",
  database: `${process.env.DB_NAME}`,

  schema: {
    tableName: "account_session",
    columnName: {
      session_id: "session_id",
      expires: "session_expiration",
      data: "session_data"
    }
  }
};
