import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Dropdown.css';

const Dropdown = ({ dropdownEnabled, setDropdownEnabled }) => {
	Dropdown.propTypes = {
		dropdownEnabled: PropTypes.bool,
		setDropdownEnabled: PropTypes.func,
	};

	const menuClickHandler = () => {
		setDropdownEnabled(false);
	};

	return (
		<div
			className={`dropdown-menu ${dropdownEnabled ? 'enabled' : 'disabled'}`}
		>
			<Link
				className="menu-nav-link"
				to="/login"
				onClick={menuClickHandler}
			>
				Login
			</Link>

			<Link
				className="menu-nav-link"
				to="/register"
				onClick={menuClickHandler}
			>
				Register
			</Link>
		</div>
	);
};

export default Dropdown;
