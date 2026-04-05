import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000,
});

// Automatically attach our JWT on every request if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});