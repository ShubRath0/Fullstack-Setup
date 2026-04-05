export interface AuthDetails {
    token: string;
    user: User;
}

export interface User {
    id: number;
    email: string;
    role: string;
}