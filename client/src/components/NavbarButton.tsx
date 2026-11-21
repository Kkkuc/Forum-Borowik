import { Link } from "react-router";
import type { IterableProperty } from "../util/types/IterableProperty";

interface NavbarButtonInterface extends IterableProperty {
	to: string;
	text: string;
}

const NavbarButton = ({ to, text }: NavbarButtonInterface) => {
	return (
		<Link className="px-4 active:bg-blue-500 " to={to}>
			{text}
		</Link>
	);
};

export { NavbarButton, type NavbarButtonInterface };
