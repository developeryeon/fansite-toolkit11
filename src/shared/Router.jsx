import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import EditDetail from '../pages/EditDetail';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="detail/:id" element={<Detail />} />
			<Route path="editdetail/:id" element={<EditDetail />} />
		</Routes>
	);
}
