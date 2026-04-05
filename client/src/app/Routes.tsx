import { AuthInitializer } from "@/components/AuthInitializer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { PublicRoute } from "@/components/PublicRoute";
import { LoginPage } from "@/features/auth/LoginPage";
import { SignupPage } from "@/features/auth/SignupPage.";
import { Home } from "@/pages/Home";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <AuthInitializer><Outlet /></AuthInitializer>,
        children: [
            {
                // PUBLIC ROUTES
                element: <PublicRoute />,
                children: [
                    {
                        path: "/",
                        element: <Navigate to="/login" replace />,
                    },
                    {
                        path: "/login",
                        element: <LoginPage />,
                    },
                    {
                        path: "/signup",
                        element: <SignupPage />
                    },
                ]
            },
            {
                // PROTECTED ROUTES
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/home",
                        element: <Home />
                    }
                ]
            }
        ]
    },
]);