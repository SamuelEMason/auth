const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth.js');
const {
	register,
	login,
	logout,
	getUsers,
	getUserById,
} = require('../controllers/auth.js');

router.get('/', getUsers);
router.get('/user', authenticateToken, getUserById);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
