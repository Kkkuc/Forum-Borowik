import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LineEdit } from "../components/LineEdit";
import { LoginCart } from "../components/LoginCart";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  return (
    <LoginCart>
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
      <PrimaryColorButton
        value="Log in"
        // TODO: add actually sending login reqs // TODO: we should consider adding constants instead of paths:V
        clickAction={() => navigate("/")}
      />

      <p className="dark:text-slate-50">
        Don't have an account yet?{" "}
        <Link className="underline text-blue-400" to="/register">
          Create an account
        </Link>{" "}
        here.
      </p>
    </LoginCart>
  );
};

export { LoginPage };
