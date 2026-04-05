import { Container, ThemeToggle } from "@/components";
import type { LoginRequest } from "@/features/auth/api";
import { GeneralForm } from "@/features/auth/components/Form";
import { useSignup } from "@/hooks";

import { Card, Link } from "@heroui/react";
import { type SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
    const { mutateAsync, isPending } = useSignup();
    const navigate = useNavigate();

    const onSignup: SubmitHandler<LoginRequest> = async (data) => {
        await toast.promise(mutateAsync(data), {
            loading: "Creating account...",
            success: "Account created!",
            error: (err) => {
                const backendMessage = err.response?.data?.message;
                return backendMessage || "Account could not be created.";
            }
        });
    };

    return (
        <Container>
            <ThemeToggle />
            <Card className="w-full max-w-sm shadow-xl">

                {/* HEADER */}
                <Card.Header>
                    <Card.Title>Create an account</Card.Title>
                    <Card.Description>Enter your email and password to get started</Card.Description>
                </Card.Header>

                <GeneralForm
                    onSubmit={onSignup}
                    isPending={isPending}
                    submitText="Create Account"
                >
                    <div className="flex items-center gap-4">
                        <span>Already have an account?</span>
                        <Link onClick={() => navigate("/login")}>Log in</Link>
                    </div>
                </GeneralForm>
            </Card>
        </Container>
    );
};