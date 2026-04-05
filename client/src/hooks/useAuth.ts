import type { ApiResponse } from "@/api";
import { createUser, loginApi, logoutApi, type AuthDetails, type CreateAccountRequest, type LoginRequest } from "@/features/auth/api";
import { login, logout } from "@/state/userslice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (data: CreateAccountRequest) => createUser(data),
        onSuccess: (response: ApiResponse<AuthDetails>) => {
            const { user, token } = response.data;
            dispatch(login({ ...user, token }));
            navigate("/home");
        }
    });
};

export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (data: LoginRequest) => loginApi(data),
        onSuccess: (response: ApiResponse<AuthDetails>) => {
            const { user, token } = response.data;
            localStorage.setItem("token", token);
            dispatch(login({ ...user, token }));
            navigate("/home");
        }
    });
};

export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: logoutApi,
        onSettled: () => {
            dispatch(logout());
            localStorage.removeItem("token");
            navigate("/login");
        }
    });
};