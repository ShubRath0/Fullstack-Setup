import { cn } from "@/utils/cn";

interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("container mx-auto px-6 min-h-screen flex items-center justify-center", className)}>
            {children}
        </div>
    );
};