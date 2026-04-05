import { api } from "@/lib/axios";

export async function logoutApi() {
    await api.get("/auth/logout");
}