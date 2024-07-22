import { useAppSelector } from "../hooks/useReduxState";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loggedIn = useAppSelector((state) => state.loggedIn.loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
