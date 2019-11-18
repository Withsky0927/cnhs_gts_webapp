const connection = require("../config/connection");
const AccountModel = require("../model/accounts_model");

const loginForm = async (req, res) => {
  try {
    const result = await AccountModel.findAll();
    res.json(result).status(200);
  } catch (error) {
    res.json({ msg: error }).status(403);
  }
};
const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const unvalidateValues = [username, password, email];

  try {
    const result = await AccountModel.create({
      username,
      password,
      email
    });
    res.json(result).status(200);
  } catch (error) {
    res.json({ msg: error }).status(403);
  }
};

/*
const updateStudentsAccount = async (req, res) => {
  const id = req.query.id;
  const username = req.body.username;
  const password = req.body.password;
  try {
    const result = await AccountModel.update(
      {
        username,
        password
      },
      {
        returning: true,
        where: {
          id
        }
      }
    );
    res.json(result).status(200);
  } catch (error) {
    res.json({ msg: error }).status(403);
  }
};

const deleteStudentsAccount = async (req, res) => {
  const id = req.query.id;

  try {
    const result = await AccountModel.destroy({
      where: {
        id
      }
    });
    AccountModel.close();
    res.json(result).send(400);
  } catch (error) {
    res.json({ msg: error }).status(403);
  }
};
*/
module.exports = {
  loginForm,
  login,
};
