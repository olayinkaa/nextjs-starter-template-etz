"use client";

import { cn } from "@/lib/utils";

export function ModalFooter({ children, className }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex justify-end gap-2 border-t px-6 py-4", className)}>
            {children}
        </div>
    );
}
