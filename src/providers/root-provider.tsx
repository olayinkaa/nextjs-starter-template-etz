import { ChildrenProps } from "@/types/base";
import ReactQueryProviders from "./react-query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootProvider({ children }: ChildrenProps) {
    return (
        <ReactQueryProviders>
            <TooltipProvider>{children}</TooltipProvider>
        </ReactQueryProviders>
    );
}
