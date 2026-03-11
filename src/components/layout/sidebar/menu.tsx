"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIconsMap } from "@/lib/icon";
import { cn } from "@/lib/utils";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { MenuList } from "./nav-items";

export default function Menu({ item }: { item: MenuList }) {
    const pathname = usePathname();
    const Icon = item?.iconKey && LucideIconsMap[item.iconKey];
    const isActiveMenu = pathname.includes(item.path);

    return (
        <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
                className="h-10 rounded-none bg-transparent! hover:bg-slate-300/30"
                asChild
                size="sm"
                tooltip={{
                    children: item.title,
                    hidden: false,
                }}
            >
                <Link
                    href={item.path}
                    className={cn("flex items-center gap-4", {
                        "bg-primary-25 border-l-primary border-l-3": isActiveMenu,
                    })}
                >
                    {Icon && (
                        <Icon
                            className={cn("size-6", {
                                "text-primary!": isActiveMenu,
                            })}
                        />
                    )}
                    <h4
                        className={cn({
                            "text-primary text-sm font-medium!": isActiveMenu,
                        })}
                    >
                        {item.title}
                    </h4>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}
