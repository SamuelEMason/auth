const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { json } = require('express');

const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			success: true,
			users: users,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

const getUserById = async (req, res) => {
	// User ID extracted from token
	const userId = req.userId;

	try {
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({
				success: false,
				error: 'User not found',
			});
		}
		res.status(200).json({
			success: true,
			user,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

const register = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			res.status(409).json({
				success: false,
				error: 'User already exists',
			});
		}

		// Hash password using bcrypt
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});

		await newUser.save();
		res.status(201).json({
			success: true,
			user: newUser,
		});
	} catch (error) {
		console.error(error.message);
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		// Retrieve user from database
		const user = await User.findOne({ username });

		// Check if user exists in database
		if (!user) {
			res.status(401).json({
				success: false,
				message: 'Invalid credentials',
			});
		}

		// Compare provided password with hashed password in database
		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return res.status(401).json({
				success: false,
				message: "Password doesn't match",
			});
		}

		// If credentials are valid, generate a JWT token
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '1w' }
		);

		res.cookie('token', token, { httpOnly: true, withCredentials: true });

		res.status(200).json({
			success: true,
			token,
		});
	} catch (error) {
		console.error(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

const logout = (req, res) => {
	try {
		// Clear token cookie
		res.cookie('token', '', {
			expires: new Date(0),
			httpOnly: true,
			secure: true,
		});
		res.status(200).json({
			success: true,
			message: 'Logged out successful',
		});
	} catch (error) {
		console.error(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = {
	getUsers,
	getUserById,
	register,
	login,
	logout,
};
