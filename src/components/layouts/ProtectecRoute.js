import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useEffect } from "react";
import Progress from "./Progress";

const ProtectedRoute = ({ children }) => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      navigate("/login");
    }

    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return isLoading ? <Progress /> :  children;
};

export default ProtectedRoute;
