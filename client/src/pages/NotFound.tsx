import { useNavigate } from "react-router";
import { LoginCard } from "../components/LoginCard";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<LoginCard>
			404 - Page not found
			<PrimaryColorButton value="Go back" clickAction={() => navigate("/")} />
		</LoginCard>
	);
};

export { NotFound };
