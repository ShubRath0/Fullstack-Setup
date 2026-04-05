import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface GeneralFormProps<T> {
    onSubmit: SubmitHandler<T>;
    isPending: boolean;
    children?: React.ReactNode;
    submitText: string;
}

export const GeneralForm = <T extends object>({
    onSubmit,
    isPending,
    children,
    submitText,
}: GeneralFormProps<T>) => {

    const { register, handleSubmit, reset } = useForm<T>();

    const handleInternalSubmit: SubmitHandler<T> = async (data) => {
        await onSubmit(data);
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(handleInternalSubmit)}>

            {/* CONTENT */}
            <Card.Content>
                <div className="flex flex-col gap-4">
                    <TextField name="email" type="email" isRequired>
                        <Label>Email</Label>
                        <Input {...register("email" as any)} placeholder="email@example.com" variant="secondary" />
                        <FieldError>Please enter a valid email address</FieldError>
                    </TextField>
                    <TextField name="password" type="password" isRequired minLength={8}>
                        <Label>Password</Label>
                        <Input {...register("password" as any)} placeholder="******" variant="secondary" />
                        <FieldError>Password must be at least 8 characters</FieldError>
                    </TextField>
                </div>
            </Card.Content>
            <Card.Footer className="mt-4 flex flex-col gap-2">
                <Button type="submit" className="w-full" isPending={isPending}>
                    {submitText}
                </Button>
                {children}
            </Card.Footer>
        </Form>
    );
};