import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { LoginRequest } from "@/features/auth/api/types/auth.request";
import { GeneralForm } from "@/features/auth/components/Form";
import { useAppDispatch } from "@/hook/hooks";
import { useLogin } from "@/hook/useAuth";
import { Card, Link } from "@heroui/react";
import { type SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const { mutateAsync, isPending } = useLogin();
    const navigate = useNavigate();
    const { } = useAppDispatch();

    const onLogin: SubmitHandler<LoginRequest> = async (data) => {
        await toast.promise(mutateAsync(data), {
            loading: "Logging in...",
            success: "Login successful!",
            error: (err) => {
                const backendMessage = err.response?.data?.message;
                return backendMessage || "Invalid credentials.";
            }
        });
    };

    return (
        <Container>
            <ThemeToggle />
            <Card className="w-full max-w-sm shadow-xl">

                {/* HEADER */}
                <Card.Header>
                    <Card.Title>Sign in</Card.Title>
                    <Card.Description>Enter your credentials to access your account</Card.Description>
                </Card.Header>

                <GeneralForm
                    onSubmit={onLogin}
                    isPending={isPending}
                    submitText="Login"
                >
                    <div className="flex items-center gap-4">
                        <span>Don't have an account?</span>
                        <Link onClick={() => navigate("/signup")}>Sign up</Link>
                    </div>
                </GeneralForm>
            </Card>
        </Container>
    );
};