import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface ITableSkeleton {
    columns?: number;
    rows?: number;
    skeletonClassName?: string;
    enableVirtualization?: boolean;
    estimatedRowHeight?: number;
    tableHeight?: string;
}

export function DataTableSkeleton({
    columns = 7,
    rows = 14,
    skeletonClassName = "",
    enableVirtualization = true,
    tableHeight = "600px",
}: ITableSkeleton) {
    return (
        <div
            className={cn("rounded-md", skeletonClassName)}
            style={{
                height: enableVirtualization ? tableHeight : "auto",
            }}
        >
            <div className="hidden justify-between px-3 py-4">
                <div>
                    <Skeleton className="h-7 w-48" />
                </div>
                <div>
                    <div className="flex gap-2">
                        <Skeleton className="h-7 w-32" />
                        <Skeleton className="h-7 w-32" />
                    </div>
                </div>
            </div>
            {/* table data display simulation */}
            <Table>
                <TableHeader>
                    <TableRow>
                        {Array.from({ length: columns }, (_, index) => (
                            <TableHead key={index} className="p-3 whitespace-nowrap">
                                <Skeleton className="h-6 w-24" />
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <TableCell
                                    key={colIndex}
                                    className="p-3 whitespace-nowrap"
                                >
                                    <Skeleton className="h-6 w-24" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* pagination simulation */}
            <div className="flex items-center justify-between py-5 pr-5 pl-3">
                <div className="">
                    <Skeleton className="h-8 w-36" />
                </div>
                <div className="">
                    <Skeleton className="h-8 w-36" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="">
                        <Skeleton className="h-8 w-36" />
                    </div>
                    <div className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton key={index} className="h-8 w-10" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
