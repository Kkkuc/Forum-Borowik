import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { LineEdit } from "../components/LineEdit";
import { LoginCard } from "../components/LoginCard";
import { LoginCardDescription } from "../components/LoginCardDescription";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

const LoginPage = () => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<LoginCard>
			<h1 className="text-center dark:text-slate-50 pb-2">
				{t("login-page-header-text")}
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
			<PrimaryColorButton
				value={t("login-page-primary-button-text")}
				// TODO: add actually sending login reqs
				// TODO: we should consider adding constants instead of paths:V
				clickAction={() => navigate("/")}
			/>

			<LoginCardDescription
				redirectUrl="/register"
				translationKey="login-page-register-page-redirect"
			/>
		</LoginCard>
	);
};

export { LoginPage };
