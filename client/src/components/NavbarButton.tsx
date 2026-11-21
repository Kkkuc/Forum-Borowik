import { Link } from "react-router";
import type { IterableProperty } from "../util/types/IterableProperty";

interface NavbarButtonInterface extends IterableProperty {
	to: string;
	text: string;
}

const NavbarButton = ({ to, text }: NavbarButtonInterface) => {
	return (
		<Link
			className="                
                inline-block
                px-4 py-4
                text-slate-200
                font-medium
                transition-all duration-200 ease-in-out
                hover:bg-blue-500
                hover:text-white
                hover:shadow-md
                active:scale-95"
			to={to}
		>
			{text}
		</Link>
	);
};

export { NavbarButton, type NavbarButtonInterface };
