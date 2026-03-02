import DataTableContent from "./datatable-content";
import DataTableFooter from "./datatable-footer";
import DataTableHeader from "./datatable-header";
import DataTablePagination from "./datatable-pagination";
import DataTableRoot from "./datatable-root";
import DatatableSearchInput from "./datatable-search-input";
import { DataTableSkeleton } from "./datatable-skeleton";
import DatatableColumnFilter from "./datatable-view-options";

type DataTableComponent = typeof DataTableRoot & {
    Content: typeof DataTableContent;
    Pagination: typeof DataTablePagination;
    Search: typeof DatatableSearchInput;
    Skeleton: typeof DataTableSkeleton;
    Header: typeof DataTableHeader;
    ColumnFilter: typeof DatatableColumnFilter;
    Footer: typeof DataTableFooter;
};

export const DataTable = Object.assign(DataTableRoot, {
    Content: DataTableContent,
    Pagination: DataTablePagination,
    Search: DatatableSearchInput,
    Skeleton: DataTableSkeleton,
    Header: DataTableHeader,
    ColumnFilter: DatatableColumnFilter,
    Footer: DataTableFooter,
}) as DataTableComponent;
