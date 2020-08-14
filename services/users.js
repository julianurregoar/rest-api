const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const getByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'jwtSecret');
  return token;
};

const create = async ({ body: { email, firstName, lastName, password } }) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: hashedPassword,
  });
  return newUser;
};

const login = async ({ body: { email, password } }) => {
  const user = await getByEmail(email);
  if (!user) {
    throw new Error('User does not exist');
  }
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Password is incorrect');
  }
  const token = await generateToken(user.id);

  return { user: { ...user._doc, password: null }, token };
};

module.exports = {
  create,
  login,
};
