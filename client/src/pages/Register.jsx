const Register = () => {
	return (
		<div className="main-container">
			<h1>Register</h1>
			<form className="register-form">
				<div className="form-control">
					<input type="email" name="email" id="email" />
					{/* <span className="input-label">Email Address</span> */}
				</div>
				<div className="form-control">
					<input type="text" name="username" id="username" />{' '}
					{/* <span className="input-label">Username</span> */}
				</div>
				<div className="form-control">
					<input type="password" name="password" id="password" />
					{/* <span className="input-label">Password</span> */}
				</div>
				<button className="btn-register">Register</button>
			</form>
		</div>
	);
};

export default Register;
