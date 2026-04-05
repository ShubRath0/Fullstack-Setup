import type { ApiResponse } from "@/api/api.types";
import type { CreateAccountRequest } from "@/features/auth/api/types/auth.request";
import type { AuthDetails } from "@/features/auth/api/types/auth.types";
import { api } from "@/lib/axios";

export async function createUser(request: CreateAccountRequest) {
    const response = await api.post<ApiResponse<AuthDetails>>("/auth/signup", request);
    return response.data;
}