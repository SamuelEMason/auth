import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const loggedUser = {
			username,
			password,
		};

		console.log(loggedUser);
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
						autoComplete="off"
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
