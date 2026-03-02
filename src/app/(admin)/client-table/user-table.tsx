"use client";

import Container from "@/components/shared/container";
import { DataTable } from "@/components/shared/table";
import { ColumnDef } from "@tanstack/react-table";
import { use, useMemo, useState } from "react";

export default function UserTable({ promise }: { promise: Promise<any[]> }) {
    const [globalFilter, setGlobalFilter] = useState("");
    const data = use(promise);

    const columns = useMemo<ColumnDef<any>[]>(
        () => [
            {
                header: "ID",
                accessorKey: "id",
            },
            {
                header: "First Name",
                accessorKey: "firstName",
            },
            {
                header: "Last Name",
                accessorKey: "lastName",
            },
            {
                header: "Email",
                accessorKey: "email",
            },
            {
                header: "Designation",
                accessorKey: "designation",
            },
            {
                header: "User Type",
                accessorKey: "userType",
            },
        ],
        []
    );
    return (
        <Container className="my-10">
            <DataTable
                columns={columns}
                data={data}
                pageSizeOptions={[5, 10, 20, 30]}
                totalRecords={data?.length}
                globalFilter={globalFilter}
                pageSize={10}
            >
                <div className="min-w-full overflow-auto">
                    <DataTable.Header>
                        <DataTable.Search
                            placeholder="Search users..."
                            value={globalFilter?.trim() ?? ""}
                            onChange={(value) => setGlobalFilter(String(value))}
                            debounce={1000}
                            wrapperClassName="w-3/4 xl:w-1/3"
                        />
                        <DataTable.ColumnFilter />
                    </DataTable.Header>
                    <DataTable.Content />
                    <DataTable.Footer>
                        <DataTable.Pagination />
                    </DataTable.Footer>
                </div>
            </DataTable>
        </Container>
    );
}
