import { cn } from "@/lib/utils";

export default function DataTableFooter({
    children,
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("px-4 pt-6 pb-4", className)} {...props}>
            {children}
        </div>
    );
}
