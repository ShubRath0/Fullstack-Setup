import type { RootState } from "@/app/Store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    id: number | null;
    email: string | null;
    token: string | null;
    role: string | null;
}

interface UserState extends Partial<UserData> {
    isInitialized: boolean;
}

const initialState: UserState = {
    id: null,
    email: null,
    token: localStorage.getItem("token") ?? null,
    role: null,
    isInitialized: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserData>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isInitialized = true;
        },
        setInitialized: (state) => {
            state.isInitialized = true;
        },
        setUser: (state, action: PayloadAction<UserData>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.isInitialized = true;
        },
        logout: () => {
            return {
                id: null,
                email: null,
                token: null,
                role: null,
                isInitialized: true
            };
        }
    }
});

export const { login, logout, setInitialized, setUser } = userSlice.actions;

export default userSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.user.id !== null;
export const selectIsAuthLoading = (state: RootState) => !state.user.isInitialized;