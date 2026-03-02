"use client";

import { ReactNode } from "react";
import { DialogTitle, Description } from "@headlessui/react";
import { cn } from "@/lib/utils";

export function ModalHeader({ children, className }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex justify-between border-b px-6 py-4", className)}>
            {children}
        </div>
    );
}

export function ModalTitle({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <DialogTitle className={cn("text-lg font-semibold", className)}>
            {children}
        </DialogTitle>
    );
}

export function ModalDescription({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <Description className={cn("text-muted-foreground text-sm", className)}>
            {children}
        </Description>
    );
}
