import { Container } from "@/components/Container";
import { SignOut } from "@/components/SignOut";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAppSelector } from "@/hook/hooks";
import { Card, Separator } from "@heroui/react";

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