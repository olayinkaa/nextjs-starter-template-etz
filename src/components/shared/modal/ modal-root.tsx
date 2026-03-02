"use client";

import React, { ReactNode, useCallback } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ModalContext } from "./modal-context";
import { modalVariants } from "./modal-variants";

interface ModalProps {
    open: boolean;
    onClose?: () => void;
    children: ReactNode;
    size?: keyof typeof modalVariants.size;
    position?: keyof typeof modalVariants.position;
    overlay?: keyof typeof modalVariants.overlay;
    rounded?: keyof typeof modalVariants.rounded;
    closeOnBackdrop?: boolean;
    backdrop?: boolean;
}

export function ModalRoot({
    open,
    onClose,
    children,
    size = "md",
    position = "center",
    overlay = "normal",
    rounded = "lg",
    backdrop = true,
}: ModalProps) {
    const hasBackdrop = useCallback(() => {
        if (backdrop && onClose) {
            onClose();
            return false;
        }
        return false;
    }, [backdrop, onClose]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                // Ensure floating dropdowns or popovers are closed
                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }
            }}
        >
            {open && (
                <Dialog
                    static
                    open={open}
                    className="relative z-50"
                    onClose={hasBackdrop}
                >
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={cn(
                            "fixed inset-0 bg-black/40",
                            modalVariants.overlay[overlay]
                        )}
                    />
                    {/* Wrapper */}
                    <div
                        className={cn(
                            "fixed inset-0 flex w-screen overflow-y-auto p-4",
                            modalVariants.position[position]
                        )}
                    >
                        <DialogPanel
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className={cn(
                                "bg-background text-foreground w-full shadow-xl",
                                modalVariants.size[size],
                                modalVariants.rounded[rounded],
                                modalVariants.base
                            )}
                        >
                            <ModalContext value={{ onClose }}>{children}</ModalContext>
                        </DialogPanel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}
