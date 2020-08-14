const userService = require('../services/users');

exports.register = async (req, res) => {
  try {
    const { body } = req;
    const result = await userService.create({ body });
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { body } = req;
    const result = await userService.login({ body });
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

exports.getAll = async (req, res) => {
  const { isAuth, userId } = req;
  if (!isAuth) {
    console.log('no auth');
  }
  console.log(userId);
};
