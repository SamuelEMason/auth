import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from '../api/auth';

const Register = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const newUser = {
			email,
			username,
			password,
		};
		const response = await register(newUser);
		console.log(response);
		setEmail('');
		setUsername('');
		setPassword('');
		navigate('/login');
	};

	return (
		<div className="main-container">
			<form className="form" onSubmit={submitHandler}>
				<h1 className="form-title">Register</h1>
				<div className="form-control">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
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

export default Register;
