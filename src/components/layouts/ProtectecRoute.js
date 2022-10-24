import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useEffect } from "react";
import Progress from "./Progress";

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    if (!user && loginOnly) {
      navigate("/login");
    }

    if (user && !loginOnly) {
      navigate("/");
    }
  }, [user, isLoading, navigate, loginOnly]);

  return isLoading ? <Progress /> :  children;
};

export default ProtectedRoute;
