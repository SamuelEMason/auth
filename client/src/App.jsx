import { Routes, Route } from 'react-router-dom';

/* PAGES */
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

/* COMPONENTS */
import Navbar from './components/Navbar';


const App = () => {
	const user = 'a';
	return (
		<>
			<Navbar />
			<Routes>
				{user ? (
					<Route exact path="/" element={<Homepage />} />
				) : (
					<Route exact path="/" element={<h1>No user</h1>} />
				)}
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
		</>
	);
};

export default App;
