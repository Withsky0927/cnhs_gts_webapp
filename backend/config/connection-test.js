const connection = require("../config/connection");

module.exports = async () => {
  try {
    const result = await connection.authenticate();
    console.log(result);
    console.log("succefully connected to database!");
  } catch (error) {
    console.log(error);
    console.log("successfully connected to database!");
  }
};
