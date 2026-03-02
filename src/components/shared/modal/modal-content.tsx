"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function ModalContent({ children, className }: React.ComponentProps<"div">) {
    return <div className={cn("px-6 py-5", className)}>{children}</div>;
}
