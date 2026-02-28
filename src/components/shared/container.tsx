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
