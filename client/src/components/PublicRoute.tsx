import { Container } from "@/components/Container";
import { useAppSelector } from "@/hook/hooks";
import { Spinner } from "@heroui/react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
    const { id, isInitialized } = useAppSelector(state => state.user);

    if (!isInitialized) return (
        <Container>
            <Spinner />
        </Container>
    );

    return id ? <Navigate to="/home" replace /> : <Outlet />;
};