"use client";
import { ChildrenProps } from "@/types/base";
import ReactQueryProviders from "./react-query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppDialogsProvider from "./app-dialogs-provider";
import { useEffect, useEffectEvent, useState } from "react";

export default function RootProvider({ children }: ChildrenProps) {
    const [mounted, setMounted] = useState(false);

    const onLoad = useEffectEvent(() => {
        setMounted(true);
    });

    useEffect(() => {
        onLoad();
    }, []);

    if (!mounted) return null;

    return (
        <ReactQueryProviders>
            <AppDialogsProvider>
                <TooltipProvider>{children}</TooltipProvider>
            </AppDialogsProvider>
        </ReactQueryProviders>
    );
}
