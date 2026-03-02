import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { LucideIconsMap } from "@/lib/icon";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MenuList } from "./nav-items";

export default function Submenu({ item }: { item: MenuList }) {
    const Icon = item?.iconKey && LucideIconsMap[item.iconKey];

    return (
        <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible p-0"
        >
            <SidebarGroup>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        className="h-11 cursor-pointer"
                        tooltip={item.title}
                    >
                        {Icon && <Icon className="text-grey-500 size-4.5!" />}

                        <h4 className="font-medium text-gray-500">{item.title}</h4>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenu className="px-6">
                            {item.subMenuItems?.map((subItem) => (
                                <SidebarMenuItem key={subItem.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={subItem.path}>
                                            <h4 className="font-medium text-gray-500">
                                                {subItem.title}
                                            </h4>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
    );
}
