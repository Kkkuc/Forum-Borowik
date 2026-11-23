import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { LineEdit } from "../components/LineEdit";
import { LoginCard } from "../components/LoginCard";
import { LoginCardDescription } from "../components/LoginCardDescription";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

const RegisterPage = () => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<LoginCard>
			<h1 className="text-center dark:text-slate-50 pb-2">
				{t("register-page-header-text")}
			</h1>
			<LineEdit
				text={login}
				setText={setLogin}
				type="text"
				placeholder={t("login-page-login-field-placeholder")}
			/>
			<LineEdit
				text={password}
				setText={setPassword}
				type="password"
				placeholder={t("login-page-password-field-placeholder")}
			/>
			<LineEdit
				text={confirmPassword}
				setText={setConfirmPassword}
				type="password"
				placeholder={t("register-page-confirm-password-field-placeholder")}
			/>
			<PrimaryColorButton
				value={t("register-page-primary-button-text")}
				// TODO: add actually sending register reqs
				clickAction={() => navigate("/login")}
			/>
			<LoginCardDescription
				redirectUrl="/login"
				translationKey="register-page-login-page-redirect"
			/>
		</LoginCard>
	);
};

export { RegisterPage };
