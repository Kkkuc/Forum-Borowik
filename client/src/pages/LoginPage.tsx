import { useState } from "react";
import { useNavigate } from "react-router";
import { LineEdit } from "../components/LineEdit";

const LoginPage = () => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();

	return (
		<div className="flex h-screen justify-center items-center bg-slate-50 dark:bg-slate-500">
			<div className="flex flex-col gap-5 min-h-fit px-10 py-15 shadow-lg rounded-sm dark:bg-slate-600">
				<h1 className="text-center dark:text-slate-50 pb-2">Forum borowik</h1>
				<LineEdit
					text={login}
					setText={setLogin}
					type="text"
					placeholder="Login"
				/>
				<LineEdit
					text={password}
					setText={setPassword}
					type="password"
					placeholder="Password"
				/>

				<input
					className="
                        px-4 py-2
                        text-slate-200
                        font-medium
                        transition-all duration-200 ease-in-out
                        bg-blue-600
                        hover:bg-blue-500
                        hover:text-white
                        hover:shadow-md
                        active:scale-95
                        rounded-sm"
					value="login"
					type="button"
					// TODO: add actually sending login reqs
					// TODO: we should consider adding constants instead of paths :V
					onClick={() => navigate("/")}
				/>
			</div>
		</div>
	);
};

export { LoginPage };
