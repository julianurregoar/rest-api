const express = require('express');
const router = express.Router();

const { register, login, getAll } = require('../controllers/users');

router.post('/register', register);
router.post('/login', login);
router.get('/', getAll);

module.exports = router;
