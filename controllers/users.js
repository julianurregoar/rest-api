const userService = require('../services/users');

exports.register = async (req, res) => {
  try {
    const { body: email, firstName, lastName, password } = req;
    const user = await userService.create(email, firstName, lastName, password);
    console.log('UER', user);
    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};
