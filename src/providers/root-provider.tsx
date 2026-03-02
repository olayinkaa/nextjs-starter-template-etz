import { ChildrenProps } from "@/types/base";
import ReactQueryProviders from "./react-query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppDialogsProvider from "./app-dialogs-provider";

export default function RootProvider({ children }: ChildrenProps) {
    return (
        <ReactQueryProviders>
            <AppDialogsProvider>
                <TooltipProvider>{children}</TooltipProvider>
            </AppDialogsProvider>
        </ReactQueryProviders>
    );
}
