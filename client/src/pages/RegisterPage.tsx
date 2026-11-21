import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LineEdit } from "../components/LineEdit";
import { LoginCart } from "../components/LoginCart";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

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
      <PrimaryColorButton
        value="Log in"
        // TODO: add actually sending register reqs
        clickAction={() => navigate("/login")}
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
