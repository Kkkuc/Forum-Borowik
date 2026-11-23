import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { LoginCard } from "../components/LoginCard";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

const NotFound = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<LoginCard>
			<p className="dark:text-slate-50">404 - {t("page-not-found")}</p>
			<PrimaryColorButton
				value={t("page-not-found-go-back-button")}
				clickAction={() => navigate("/")}
			/>
		</LoginCard>
	);
};

export { NotFound };
