const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const authenticateToken = (req, res, next) => {
	const { token } = req.cookies;
	if (!token) {
		return res.status(400).json({
			success: false,
			error: 'Authentication required',
		});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.userId = decoded.userId;
		next();
	} catch (error) {
		res.status(400).json({
			success: false,
			error: 'Invalid token',
		});
	}
};

module.exports = {
	authenticateToken,
};
