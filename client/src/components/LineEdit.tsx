import { useState } from "react";
import type { HtmlInputType } from "../util/types/HtmlInputType";

interface LineEditInterface {
	text: string;
	setText: (value: string | ((prev: string) => string)) => void;
	type?: HtmlInputType;
	placeholder?: string;
}
const LineEdit = ({ text, setText, type, placeholder }: LineEditInterface) => {
	useState<string>();
	return (
		<input
			className="
                w-full
				rounded-sm
				border border-gray-300
				bg-slate-50
                dark:bg-slate-600
				px-4 py-2.5
				text-gray-900
                dark:text-slate-50
                dark:caret-slate-50
				placeholder:text-gray-400
				shadow-sm
				outline-none
				transition-all duration-200
				hover:border-blue-400
				focus:border-blue-600
				focus:ring-2
				focus:ring-blue-600/20"
			value={text}
			onChange={(e) => setText(e.target.value)}
			type={type ?? "text"}
			placeholder={placeholder ?? ""}
		/>
	);
};

export { LineEdit, type LineEditInterface };
