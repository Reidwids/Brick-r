import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
	return (
		<div className="App">
			<Routes>
				{/* <Route path="/" element={<Layout />}> */}
				<Route path="" element={<Home />} />
				<Route path="about" element={<About />} />
				{/* </Route> */}
			</Routes>
		</div>
	);
}

export default App;
