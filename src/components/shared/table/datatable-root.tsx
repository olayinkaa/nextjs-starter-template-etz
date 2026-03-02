"use client";

import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";

import { useEffect, useState } from "react";
import DataTableContext from "./datatable-context";
import { DataTableClientProps, DataTableRemoteProps } from "@/types/datatable";

type DataTableRootProps<TData, TValue> =
    | DataTableRemoteProps<TData, TValue>
    | DataTableClientProps<TData, TValue>;

export default function DataTableRoot<TData, TValue>({
    columns,
    data,
    remote = false,
    totalRecords,
    pageSizeOptions = [10, 20, 50],
    isLoading = false,
    globalFilter,
    pagination,
    pageCount,
    pageSize,
    columnVisibility,
    setColumnVisibility,
    rowSelection,
    setRowSelection,
    selectionKey = "id" as keyof TData,
    enableRowSelection = true,
    columnFilters,
    setColumnFilters,
    setGlobalFilter,
    setPagination,
    enableVirtualization = false,
    estimatedRowHeight = 53,
    tableHeight = "600px",
    onRowClick,
    children,
}: DataTableRootProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            columnVisibility,
            ...(remote && {
                pagination,
                rowSelection,
            }),
            ...(!remote && {
                columnFilters,
                sorting,
            }),
        },

        initialState: {
            pagination: {
                pageSize,
            },
        },

        enableRowSelection,
        /** Change handlers */
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        /** Models */
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        ...(remote && {
            pageCount,
            manualPagination: true,
            manualFiltering: true,
            onPaginationChange: setPagination,
            onGlobalFilterChange: setGlobalFilter,
            onRowSelectionChange: setRowSelection,
            getRowId: (row: TData) => String(row[selectionKey]),
            autoResetPageIndex: false,
        }),
    });

    /** Reset page when filter changes (remote only) */
    useEffect(() => {
        if (remote) {
            table.resetPageIndex(true);
        }
    }, [remote, globalFilter, pagination?.pageSize, table]);

    return (
        <DataTableContext
            value={{
                table,
                isLoading,
                totalRecords,
                pageSizeOptions,
                enableVirtualization,
                estimatedRowHeight,
                tableHeight,
                onRowClick,
            }}
        >
            <div className="rounded-lg border">{children}</div>
        </DataTableContext>
    );
}
