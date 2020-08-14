const JWT = require('jsonwebtoken');
const User = require('../models/User');

const create = async ({ email, firstName, lastName, password }) => {
  const newUser = await User.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  });
  return newUser;
};

const register = async (registerToken) => {
  //   const { user: id } = JWT.verify(registerToken);
  //   const user = await update(id, { confirmed: true }, '$set');
  //   const token = await generateLoginToken(user);
  console.log('Hello Services');
  return token;
};

module.exports = {
  register,
  create,
};
