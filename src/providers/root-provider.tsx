import { ChildrenProps } from "@/types/base";
import ReactQueryProviders from "./react-query-provider";

export default function RootProvider({ children }: ChildrenProps) {
    return <ReactQueryProviders>{children}</ReactQueryProviders>;
}
