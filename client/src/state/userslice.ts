import type { RootState } from "@/app/Store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    email: string | null;
    role: String;
}

const initialState: User = {
    id: null,
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    role: "guest"
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        logout: () => initialState
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.user.id !== null;
export const selectCurrentUser = (state: RootState) => state.user;