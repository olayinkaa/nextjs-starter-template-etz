"use client";

import { createContext, use } from "react";

interface ModalContextType {
    onClose?: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
    const ctx = use(ModalContext);
    if (!ctx) {
        throw new Error("Modal components must be used inside <Modal />");
    }
    return ctx;
};
