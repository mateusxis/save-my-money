const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};

const isValidPassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { encryptPassword, isValidPassword };
