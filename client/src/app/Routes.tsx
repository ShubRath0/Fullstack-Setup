import { AuthInitializer } from "@/components/AuthInitializer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { LoginPage } from "@/features/auth/LoginPage";
import { SignupPage } from "@/features/auth/SignupPage.";
import { Home } from "@/pages/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    // PUBLIC ROUTES
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
    // PROTECTED ROUTES
    {
        element: <AuthInitializer><ProtectedRoute /></AuthInitializer>,
        children: [
            {
                path: "/home",
                element: <Home />
            }
        ]
    }
]);