"use client";

import { flexRender } from "@tanstack/react-table";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useDataTable } from "./datatable-context";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function DataTableContent<TData>({
    showFooter = false,
}: {
    showFooter?: boolean;
}) {
    const { table, enableVirtualization, estimatedRowHeight, tableHeight, onRowClick } =
        useDataTable<TData>();

    const tableContainerRef = useRef<HTMLDivElement>(null);
    const rows = table.getRowModel().rows;

    const rowVirtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => tableContainerRef.current,
        estimateSize: () => estimatedRowHeight,
        enabled: enableVirtualization,
    });

    const virtualRows = rowVirtualizer.getVirtualItems();
    const totalSize = rowVirtualizer.getTotalSize();

    const paddingTop = virtualRows.length > 0 ? virtualRows[0]?.start || 0 : 0;
    const paddingBottom =
        virtualRows.length > 0
            ? totalSize - (virtualRows[virtualRows.length - 1]?.end || 0)
            : 0;

    return (
        <div className="rounded-none">
            <div
                ref={tableContainerRef}
                className="overflow-auto"
                style={{
                    height: enableVirtualization ? tableHeight : "auto",
                }}
            >
                <Table className="min-w-full table-auto">
                    <TableHeader className="rounded-none border-0 bg-[#FAFAFA]">
                        {table?.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="border-none">
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        className="text-pxs font-medium"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {enableVirtualization && paddingTop > 0 && (
                            <tr>
                                <td style={{ height: `${paddingTop}px` }} />
                            </tr>
                        )}
                        {enableVirtualization
                            ? virtualRows?.map((virtualRow) => {
                                  const row = rows[virtualRow.index];
                                  return (
                                      <TableRow
                                          key={row.id}
                                          onClick={
                                              onRowClick
                                                  ? () => onRowClick(row.original)
                                                  : undefined
                                          }
                                          className={cn(
                                              "hover:bg-primary-25",
                                              onRowClick
                                                  ? "cursor-pointer"
                                                  : "cursor-default"
                                          )}
                                          data-index={virtualRow.index}
                                      >
                                          {row?.getVisibleCells()?.map((cell) => (
                                              <TableCell
                                                  className={cn(
                                                      "h-18 text-sm",
                                                      onRowClick
                                                          ? "cursor-pointer"
                                                          : "cursor-default"
                                                  )}
                                                  key={cell.id}
                                                  onClick={(e) => {
                                                      if (
                                                          ["actions"].includes(
                                                              cell.column.id
                                                          )
                                                      ) {
                                                          e.stopPropagation();
                                                      }
                                                  }}
                                              >
                                                  {flexRender(
                                                      cell.column.columnDef.cell,
                                                      cell.getContext()
                                                  )}
                                              </TableCell>
                                          ))}
                                      </TableRow>
                                  );
                              })
                            : rows?.map((row) => (
                                  <TableRow
                                      key={row.id}
                                      className={cn(
                                          "hover:bg-primary-25",
                                          onRowClick ? "cursor-pointer" : "cursor-default"
                                      )}
                                      onClick={
                                          onRowClick
                                              ? () => onRowClick(row.original)
                                              : undefined
                                      }
                                  >
                                      {row?.getVisibleCells()?.map((cell) => (
                                          <TableCell
                                              className={cn(
                                                  "h-18 text-sm",
                                                  onRowClick
                                                      ? "cursor-pointer"
                                                      : "cursor-default"
                                              )}
                                              key={cell.id}
                                              onClick={(e) => {
                                                  if (
                                                      ["actions"].includes(cell.column.id)
                                                  ) {
                                                      e.stopPropagation();
                                                  }
                                              }}
                                          >
                                              {flexRender(
                                                  cell.column.columnDef.cell,
                                                  cell.getContext()
                                              )}
                                          </TableCell>
                                      ))}
                                  </TableRow>
                              ))}
                        {enableVirtualization && paddingBottom > 0 && (
                            <tr>
                                <td style={{ height: `${paddingBottom}px` }} />
                            </tr>
                        )}
                    </TableBody>
                    {showFooter && (
                        <TableFooter>
                            {table?.getFooterGroups()?.map((footerGroup) => (
                                <TableRow key={footerGroup.id} className="">
                                    {footerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableFooter>
                    )}
                </Table>
            </div>
        </div>
    );
}
