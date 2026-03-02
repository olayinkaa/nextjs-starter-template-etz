"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import NavDasboard from "./nav-dashboard";
import { NavItems } from "./nav-items";
import NavSecondary from "./nav-secondary";
import { NavUser } from "./nav-user";
import NavMain from "./nav-main";

// import NavUser from "./nav-user";

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="shadow-xs" variant="sidebar" {...props}>
            <SidebarHeader className="pl-4">
                <SidebarMenu>
                    <SidebarMenuItem className="mt-5 h-6 w-25.75">
                        {/* Put your Logo here */}
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-4">
                <NavDasboard items={NavItems.dashboard} />
                <NavMain items={NavItems.main} />
                <NavSecondary items={NavItems.setting} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
