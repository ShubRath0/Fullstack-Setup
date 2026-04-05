import { useAppSelector } from "@/hook/hooks";
import { selectIsAuthenticated, selectIsAuthLoading } from "@/state/userslice";
import { Spinner } from "@heroui/react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const isAuth = useAppSelector(selectIsAuthenticated);
    const isAuthLoading = useAppSelector(selectIsAuthLoading);

    if (isAuthLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (!isAuth) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};