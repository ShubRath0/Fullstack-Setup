import { SignOut, ThemeToggle } from "@/components";
import { useAppSelector } from "@/hooks";
import { Card, Separator } from "@heroui/react";
import { Container } from "lucide-react";

export const Home = () => {
    const { id, email, role } = useAppSelector(state => state.user);

    return (
        <Container>
            <ThemeToggle />
            <Card>
                <Card.Header>
                    <Card.Title>Info</Card.Title>
                    <Card.Description>User information</Card.Description>
                </Card.Header>
                <Separator />
                <Card.Content>
                    <span>Email: {email}</span>
                    <span>User ID: {id}</span>
                    <span>Role: {role}</span>
                </Card.Content>
                <Separator />
                <Card.Footer>
                    <SignOut />
                </Card.Footer>
            </Card>
        </Container>
    );
};