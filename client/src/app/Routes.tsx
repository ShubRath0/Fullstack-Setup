import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Test } from "@/components/Test";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    // PUBLIC ROUTES
    {
        path: "/",
        element: <Test />,
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