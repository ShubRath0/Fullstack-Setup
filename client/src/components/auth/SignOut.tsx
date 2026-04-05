import { useLogout } from "@/hooks";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

export const SignOut = () => {
    const { mutateAsync } = useLogout();

    const handleSignOut = async () => {
        await toast.promise(mutateAsync(), {
            loading: "Logging out...",
            success: "Logged out",
            error: "Logged out"
        });
    };

    return (
        <Button onClick={handleSignOut}>
            Sign Out
        </Button>
    );
};