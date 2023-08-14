import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import Dropdown from './Dropdown';

import './Navbar.css';

const Navbar = () => {
	const [dropdownEnabled, setDropdownEnabled] = useState(false);
	const dropdownHandler = () => {
		setDropdownEnabled(!dropdownEnabled);
	};

	return (
		<>
			<nav className="main-header">
				<span className="logo">
					<Link className="nav-link" to="/">
						a
					</Link>
				</span>
				<ul className="nav-links">
					<li>
						<Link className="nav-link" to="/login">
							Login
						</Link>
						<Link className="nav-link" to="/register">
							Register
						</Link>
					</li>
				</ul>
				<div className="dropdown" onClick={dropdownHandler}>
					{dropdownEnabled ? <AiFillCloseCircle /> : <HiMenuAlt3 />}
				</div>
			</nav>
			<Dropdown
				className="dropdown"
				dropdownEnabled={dropdownEnabled}
				setDropdownEnabled={setDropdownEnabled}
			/>
		</>
	);
};

export default Navbar;
