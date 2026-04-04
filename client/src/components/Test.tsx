import { useLogin, useSignup } from "@/hook/useAuth";
import { Button } from "@heroui/react";

export const Test = () => {

    const { mutate: signupMutation, isPending: signupPending } = useSignup();
    const { mutate: loginMutation, isPending: loginPending } = useLogin();

    const handleSignup = () => {
        signupMutation({
            username: "brandon_dev",
            password: "securePassword123!",
            email: "test@dctc.edu"
        });
    };

    const handleLogin = () => {
        loginMutation({
            username: "brandon_dev",
            password: "securePassword123!",
        });
    };

    return (
        <div>
            <Button
                isPending={signupPending}
                onClick={handleSignup}
            >
                Sign up
            </Button>
            <Button
                isPending={loginPending}
                onClick={handleLogin}
            >
                Log in
            </Button>
        </div>
    );
};