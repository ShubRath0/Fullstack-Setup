import type { ApiResponse } from "@/api/api.types";
import type { CreateAccountRequest } from "@/api/auth/types/auth.request";
import type { AuthDetails } from "@/api/auth/types/auth.types";
import { api } from "@/lib/axios";

export async function createUser(request: CreateAccountRequest) {
    try {
        const response = await api.post<ApiResponse<AuthDetails>>("/auth/signup", request);
        console.log(response.data);
    } catch (err) {
        console.log("API ERROR:", err);
    }
}