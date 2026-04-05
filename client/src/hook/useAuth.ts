import type { ApiResponse } from "@/api/api.types";
import { createUser } from "@/features/auth/api/create-user";
import { loginApi } from "@/features/auth/api/login";
import { logoutApi } from "@/features/auth/api/logout";
import type { CreateAccountRequest, LoginRequest } from "@/features/auth/api/types/auth.request";
import type { AuthDetails } from "@/features/auth/api/types/auth.types";
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
        onSuccess: () => {
            dispatch(logout());
            navigate("/login");
        }
    });
};