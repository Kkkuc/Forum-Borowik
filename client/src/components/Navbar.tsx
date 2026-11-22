import { NavbarButton, type NavbarButtonInterface } from "./NavbarButton";

const Navbar = () => {
	const buttons: NavbarButtonInterface[] = [
		{ to: "/", text: "Main Page", id: 0 },
		{ to: "/threads/new", text: "New Thread", id: 1 },
		{ to: "/threads/1", text: "Example thread #1", id: 2 },
	];
	return (
		<nav className="flex flex-no-wrap fixed top-0 w-full bg-blue-600 text-slate-200 px-6 items-center shadow-lg rounded-b-sm justify-center">
			{buttons.map((e) => (
				<NavbarButton key={e.id} {...e} />
			))}
		</nav>
	);
};

export { Navbar };
