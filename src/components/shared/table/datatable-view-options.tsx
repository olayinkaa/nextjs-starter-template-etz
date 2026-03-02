import { Settings2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useDataTable } from "./datatable-context";

export default function DatatableColumnFilter<TData>() {
    const { table } = useDataTable<TData>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Settings2 />
                    <span>Columns</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end">
                <div className="mb-3 flex items-center justify-between">
                    <h2>Show Columns</h2>
                    <PopoverClose asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-5 rounded-full"
                        >
                            <XCircle />
                        </Button>
                    </PopoverClose>
                </div>
                {table
                    .getAllColumns()
                    ?.filter(
                        (column: any) =>
                            typeof column.accessorFn !== "undefined" &&
                            column.getCanHide()
                    )
                    .map((column: any) => {
                        return (
                            <div key={column.id} className="">
                                <label className="flex items-center gap-1 hover:cursor-pointer">
                                    <input
                                        {...{
                                            type: "checkbox",
                                            checked: column.getIsVisible(),
                                            onChange: column.getToggleVisibilityHandler(),
                                            className: "size-4.5 rounded-full",
                                        }}
                                    />
                                    {column.columnDef.header}
                                </label>
                            </div>
                        );
                    })}
            </PopoverContent>
        </Popover>
    );
}
