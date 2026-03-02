"use client";

import { createContext, useContext } from "react";
import { Table } from "@tanstack/react-table";

export interface DataTableContextType<TData> {
    table: Table<TData>;
    isLoading: boolean;
    totalRecords: number;
    pageSizeOptions?: number[];
    enableVirtualization: boolean;
    estimatedRowHeight: number;
    tableHeight: string;
    onRowClick?: (row: TData) => void;
}

const DataTableContext = createContext<DataTableContextType<any> | null>(null);

export function useDataTable<TData>() {
    const ctx = useContext(DataTableContext);
    if (!ctx) {
        throw new Error("useDataTable must be used inside DataTable");
    }
    return ctx as DataTableContextType<TData>;
}

export default DataTableContext;
