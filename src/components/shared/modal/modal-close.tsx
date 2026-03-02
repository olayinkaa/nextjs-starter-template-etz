"use client";

import { CircleX } from "lucide-react";
import { useModal } from "./modal-context";

export function ModalClose({ className }: { className?: string }) {
    const { onClose } = useModal();

    return (
        <button type="button" onClick={onClose} className={className}>
            <CircleX size={24} />
        </button>
    );
}
