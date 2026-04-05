import { useAppDispatch, useAppSelector } from "@/hooks";
import { api } from "@/lib/axios";
import { logout, setInitialized, setUser } from "@/state/userslice";
import { useEffect } from "react";

export const AuthInitializer = ({ children }: { children: React.ReactNode; }) => {
    const dispatch = useAppDispatch();
    const { token, isInitialized } = useAppSelector(state => state.user);

    useEffect(() => {
        const verifySession = async () => {
            if (!token) {
                dispatch(setInitialized());
                return;
            }

            try {
                const response = await api.get("/auth/me");
                dispatch(setUser(response.data.data));
            } catch (error) {
                dispatch(logout());
            } finally {
                dispatch(setInitialized());
            }
        };

        if (!isInitialized) {
            verifySession();
        }
    }, [token, isInitialized, dispatch]);

    return <>{children}</>;
};