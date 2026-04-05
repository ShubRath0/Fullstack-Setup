import { router } from "@/app/Routes";
import { store } from "@/app/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from 'next-themes';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const ToasterWithTheme = () => {
    const { resolvedTheme } = useTheme();

    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                style: {
                    borderRadius: '10px',
                    background: resolvedTheme === 'dark' ? '#333' : '#fff',
                    color: resolvedTheme === 'dark' ? '#fff' : '#333',
                },
            }}
        />
    );
};

export const Providers = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute="class">
                    <RouterProvider router={router} />
                    <ToasterWithTheme />
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
};