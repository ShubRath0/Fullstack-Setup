import { cn } from "@/utils/cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("container mx-auto px-4 min-h-screen flex flex-col items-center justify-center", className)}>
            {children}
        </div>
    );
};