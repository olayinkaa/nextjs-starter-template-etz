"use client";

import { CircleX, LucideIcon } from "lucide-react";
import { useModal } from "./modal-context";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";

interface ModalCloseProps {
    className?: string;
    icon?: LucideIcon;
    asChild?: boolean;
}

export function ModalClose({
    className,
    icon: IconComponent,
    asChild = false,
}: ModalCloseProps) {
    const { onClose } = useModal();

    const Comp = asChild ? Slot.Root : "button";
    const Icon = IconComponent ?? CircleX;

    return (
        <Comp
            onClick={onClose}
            className={cn("inline-flex items-center justify-center", className)}
        >
            <Icon size={24} />
        </Comp>
    );
}
