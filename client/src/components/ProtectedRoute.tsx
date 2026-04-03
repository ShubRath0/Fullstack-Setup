import { useAppSelector } from "@/hook/hooks";
import { selectIsAuthenticated } from "@/state/userslice";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const isAuth = useAppSelector(selectIsAuthenticated);

    if (!isAuth) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};