import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LineEdit } from "../components/LineEdit";
import { LoginCart } from "../components/LoginCart";

const RegisterPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  return (
    <LoginCart>
      <h1 className="text-center dark:text-slate-50 pb-2">Create an account</h1>
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
      <LineEdit
        text={confirmPassword}
        setText={setConfirmPassword}
        type="password"
        placeholder="Confirm password"
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
        // TODO: add actually sending register reqs
        onClick={() => navigate("/login")}
      />
      <p className="dark:text-slate-50">
        Already have an account?{" "}
        <Link className="underline text-blue-400" to="/login">
          Log in
        </Link>{" "}
        here.
      </p>
    </LoginCart>
  );
};

export { RegisterPage };
