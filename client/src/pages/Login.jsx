import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAuthToken } from '../redux/reducers/authReducer.js';
import { login } from '../api/auth';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const submitHandler = async (e) => {
		e.preventDefault();
		const loggedUser = {
			username,
			password,
		};

		const response = await login(loggedUser);
		dispatch(setAuthToken({ authToken: response.token }));

		setUsername('');
		setPassword('');
		navigate('/');
	};

	return (
		<div className="main-container">
			<form className="form" onSubmit={submitHandler}>
				<h1 className="form-title">Login</h1>
				<div className="form-control">
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>{' '}
				</div>
				<div className="form-control">
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<button className="btn-register">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
