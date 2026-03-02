import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useDataTable } from "./datatable-context";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { paginationRange } from "@/lib/pagination-range";

export default function DataTablePagination<TData>() {
    const { table, totalRecords, pageSizeOptions } = useDataTable<TData>();

    const pageRange = paginationRange({
        totalPage: table?.getPageCount(),
        page: table?.getState()?.pagination.pageIndex + 1,
        siblings: 1,
    });

    return (
        <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-muted-foreground flex text-sm">
                Total records: {totalRecords ?? 0}
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Rows per page</p>
                <Select
                    value={`${table.getState()?.pagination.pageSize}`}
                    onValueChange={(value: string) => {
                        table.setPageSize(Number(value));
                    }}
                >
                    <SelectTrigger className="h-8 w-17.5">
                        <SelectValue placeholder={table.getState().pagination.pageSize} />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {pageSizeOptions?.map((pageSize) => (
                            <SelectItem
                                key={pageSize}
                                value={`${pageSize}`}
                                className="cursor-pointer"
                            >
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {table.getPageCount() > 0 && (
                <div className="flex w-25 items-center justify-center text-sm font-medium">
                    Page {table?.getState()?.pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                </div>
            )}
            <div className="flex items-center space-x-2 2xl:col-span-2">
                <Button
                    variant="outline"
                    onClick={() => table?.setPageIndex(0)}
                    disabled={!table?.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to first page</span>
                    <ChevronsLeft className="size-4" />
                </Button>
                <Button
                    variant="outline"
                    onClick={() => table?.previousPage()}
                    disabled={!table?.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeft className="size-4" />
                </Button>
                {pageRange.map((item, index) => {
                    return (
                        <Button
                            key={`${item}${index}`}
                            variant={`${
                                table.getState()?.pagination.pageIndex + 1 === item
                                    ? "default"
                                    : "outline"
                            }`}
                            onClick={() => table?.setPageIndex(+item - 1)}
                            disabled={item === "..."}
                        >
                            {item}
                        </Button>
                    );
                })}
                <Button
                    variant="outline"
                    onClick={() => table?.nextPage()}
                    disabled={!table?.getCanNextPage()}
                >
                    <span className="sr-only">Go to next page</span>
                    <ChevronRight className="size-4" />
                </Button>
                <Button
                    variant="outline"
                    onClick={() => table?.setPageIndex(table?.getPageCount() - 1)}
                    disabled={!table?.getCanNextPage()}
                >
                    <span className="sr-only">Go to last page</span>
                    <ChevronsRight className="size-4" />
                </Button>
            </div>
        </div>
    );
}
