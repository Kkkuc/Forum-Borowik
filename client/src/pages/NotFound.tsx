import { useNavigate } from "react-router";
import { LoginCart } from "../components/LoginCart";
import { PrimaryColorButton } from "../components/PrimaryColorButton";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <LoginCart>
      404 - Page not found
      <PrimaryColorButton value="Go back" clickAction={() => navigate("/")} />
    </LoginCart>
  );
};

export { NotFound };
