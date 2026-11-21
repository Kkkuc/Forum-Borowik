import { Link, Outlet } from "react-router";

export default function Layout() {
	return (
		<div>
			<nav
				style={{
					display: "flex",
					gap: "1rem",
					padding: "1rem",
					borderBottom: "1px solid #ccc",
				}}
			>
				{" "}
				{/* placeholder. Needs to be divided */}
				<Link to="/">Main Page</Link>
				<Link to="/threads/new">New Thread</Link>
				<Link to="/threads/1">Example thread #1</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
