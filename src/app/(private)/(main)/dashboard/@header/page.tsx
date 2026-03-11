import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Typography } from "@/components/ui/typography";
import { LucideIconsMap } from "@/lib/icon";
import { Plus } from "lucide-react";
import Link from "next/link";

const ActionList = [
    {
        title: "Manual Entry",
        icon: "plus-circle",
        href: "/manual-entry",
    },
    {
        title: "Bulk Upload",
        icon: "upload",
        href: "/bulk-upload",
    },
];

export default function DashboardHeader() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <Typography size="h1" variant="primary" weight="bold">
                    NRS Invoice Dashboard
                </Typography>
                <Typography as="p" size="plg">
                    Manage your NRS e-invoicing compliance
                </Typography>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="primary">
                        <Plus /> Create Invoice
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="rounded-tx-lg flex w-57.25 flex-col gap-2 px-2 shadow-xs"
                >
                    {ActionList.map((item) => {
                        const Icon = LucideIconsMap[item.icon];
                        return (
                            <DropdownMenuItem
                                key={item.title}
                                className="flex cursor-pointer items-center gap-2 hover:bg-blue-500"
                                asChild
                            >
                                <Link href={item.href}>
                                    <Icon size={20} color="var(--color-primary)" />
                                    <span className="text-pmd font-medium text-[#30313D]">
                                        {item.title}
                                    </span>
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
