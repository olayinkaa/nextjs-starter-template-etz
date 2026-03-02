import {
    ColumnDef,
    ColumnFiltersState,
    OnChangeFn,
    PaginationState,
} from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";

export interface DataTableSharedProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    globalFilter?: string;
    totalRecords: number;
    pageSizeOptions?: number[];
    isLoading?: boolean;
    columnVisibility?: any;
    setColumnVisibility?: any;
    rowSelection?: any;
    setRowSelection?: any;
    selectionKey?: keyof TData;
    enableRowSelection?: boolean;
    columnFilters?: ColumnFiltersState;
    setColumnFilters?: OnChangeFn<ColumnFiltersState>;
    enableVirtualization?: boolean;
    estimatedRowHeight?: number;
    tableHeight?: string;
    onRowClick?: (row: TData) => void;
    children: React.ReactNode;
}

export interface DataTableRemoteProps<TData, TValue> extends DataTableSharedProps<
    TData,
    TValue
> {
    remote: true;
    pagination: PaginationState;
    pageCount: number;
    setPagination: OnChangeFn<PaginationState>;
    setGlobalFilter?: Dispatch<SetStateAction<string | undefined>>;
    // Explicitly forbid these when remote
    pageSize?: never;
}

export interface DataTableClientProps<TData, TValue> extends DataTableSharedProps<
    TData,
    TValue
> {
    remote?: false;
    pageSize: number;
    // Explicitly forbid these when not remote
    pageCount?: never;
    pagination?: never;
    setPagination?: never;
    setGlobalFilter?: never;
}
