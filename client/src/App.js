import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
	return (
		<div className="wrapper">
			<Login></Login>
		</div>
);
}

export default App;
/*
	<BrowserRouter>
		<Routes>
			<Route path="./components/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
*/