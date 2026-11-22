import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CreateThreadPage from "./pages/CreateThreadPage";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";
import { RegisterPage } from "./pages/RegisterPage";
import ThreadDetailsPage from "./pages/ThreadDetailsPage";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="threads/new" element={<CreateThreadPage />} />
					<Route path="threads/:id" element={<ThreadDetailsPage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</div>
	);
}

export default App;
