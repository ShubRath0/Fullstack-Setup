import { router } from "@/app/Routes";
import { store } from "@/app/Store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

export const Providers = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};