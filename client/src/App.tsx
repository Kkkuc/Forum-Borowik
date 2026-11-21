import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CreateThreadPage from "./pages/CreateThreadPage";
import HomePage from "./pages/HomePage";
import ThreadDetailsPage from "./pages/ThreadDetailsPage";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("/api/homepage")
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);

	return (
		<div>
			<p>{message}</p>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="threads/new" element={<CreateThreadPage />} />
					<Route path="threads/:id" element={<ThreadDetailsPage />} />
					<Route path="*" element={<h1>404 - Page not found</h1>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
