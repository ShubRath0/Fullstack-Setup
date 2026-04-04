import type { LoginRequest } from "@/api/auth/types/auth.request";
import { api } from "@/lib/axios";

export async function login(request: LoginRequest) {
    try {
        const response = await api.post("/auth/login", request);
        console.log(response.data);
    } catch (err) {
        console.log("API ERROR", err);
    }
}