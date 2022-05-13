import { useState } from 'react';
import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import navLogo from './assets/BrickrLogo.svg';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
	return (
		<div className="App">
			<nav className="navbar">
				<div id="navLS">
					<Link className="nav-link" to="/">
						<img id="navLogo" src={navLogo} alt="logo" />
					</Link>
				</div>
				<div id="navRS">
					<Link className="nav-link" to="/about">
						About
					</Link>
					<Link className="nav-link" to="/login">
						Login
					</Link>
					<Link className="nav-link" to="/signup">
						Signup
					</Link>
				</div>
			</nav>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
