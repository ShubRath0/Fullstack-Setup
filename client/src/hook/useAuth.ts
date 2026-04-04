import { createUser } from "@/api/auth/create-user";
import { login } from "@/api/auth/login";
import type { CreateAccountRequest, LoginRequest } from "@/api/auth/types/auth.request";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
    return useMutation({
        mutationFn: (data: CreateAccountRequest) => createUser(data)
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginRequest) => login(data)
    });
};