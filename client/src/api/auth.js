import axios from 'axios';

const baseUrl = 'http://localhost:3001/auth';

export const register = async (user) => {
	try {
		const response = await axios.post(`${baseUrl}/register`, {
			email: user.email,
			username: user.username,
			password: user.password,
		});
		return response.data;
	} catch (error) {
		throw error.response.data;
	}
};

export const login = async (user) => {
	try {
		const response = await axios.post(`${baseUrl}/login`, {
			username: user.username,
			password: user.password,
		});
		return response.data;
	} catch (error) {
		throw error.response.data;
	}
};

export const logout = async () => {};

export const getUser = async () => {
	try {
		const response = await axios.get(`${baseUrl}/user`, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		throw error.response.data;
	}
};
