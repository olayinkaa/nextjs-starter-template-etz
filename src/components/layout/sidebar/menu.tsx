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
                className="hover:bg-grey-300/30 h-10 rounded-none px-3"
                asChild
                size="sm"
            >
                <Link
                    href={item.path}
                    className={cn("flex items-center gap-4", {
                        "bg-primary-25 border-l-primary border-l-3": isActiveMenu,
                    })}
                >
                    {Icon && (
                        <Icon
                            className={cn("text-grey size-4.5!", {
                                "text-primary-400": isActiveMenu,
                            })}
                        />
                    )}
                    <h4
                        className={cn({
                            "text-primary-400! text-sm font-medium!": isActiveMenu,
                        })}
                    >
                        {item.title}
                    </h4>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}
