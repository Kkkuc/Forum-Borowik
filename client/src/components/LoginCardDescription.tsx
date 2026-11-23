import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

interface LoginCardDescriptionInterface {
	redirectUrl: string;
	translationKey: string;
}

const LoginCardDescription = ({
	redirectUrl,
	translationKey,
}: LoginCardDescriptionInterface) => {
	const { t } = useTranslation();
	return (
		<Trans
			// TODO: ugly af
			// but so is react  :VV
			i18nKey={t(translationKey)}
			components={{
				redirect: <Link className="underline text-blue-400" to={redirectUrl} />,
				paragraph: <p className="dark:text-slate-50" />,
			}}
		/>
	);
};

export { LoginCardDescription };
