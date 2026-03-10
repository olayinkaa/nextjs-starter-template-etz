import React from "react";

import { cn } from "@/lib/utils";

export default function Container({
    children,
    className = "",
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="container"
            className={cn("container mx-auto px-4", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function PageContainer({ children, className }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-(--page-width) px-5 py-5 sm:px-8 md:px-5 2xl:px-10",
                className
            )}
        >
            {children}
        </div>
    );
}

export function TableContainer({
    children,
    className = "",
}: React.ComponentProps<"section">) {
    return (
        <section
            data-slot="page-container"
            className={cn(
                "bg-background text-foreground m-0 rounded-lg p-5 shadow-sm",
                className
            )}
        >
            {children}
        </section>
    );
}
