import type { LoginRequest } from "@/features/auth/api/types/auth.request";
import { api } from "@/lib/axios";

export async function loginApi(request: LoginRequest) {
    const response = await api.post("/auth/login", request);
    return response.data;
}