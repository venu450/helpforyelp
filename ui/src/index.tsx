import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/home" element={<Home />} />
					<Route path="/search" element={<SearchResult />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}
