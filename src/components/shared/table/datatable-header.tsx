import { cn } from "@/lib/utils";

export default function DataTableHeader({
    children,
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-between gap-3",
                "rounded-t-lg border-0 bg-[#FAFAFA] p-4 xl:flex-row xl:gap-0",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
