import { ProtectedRoute } from "@/components/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    // PUBLIC ROUTES
    {
        path: "/",
        element: <div>Hi</div>,
    },
    // PROTECTED ROUTES
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/test",
                element: <div>This is protected</div>
            }
        ]
    }
]);