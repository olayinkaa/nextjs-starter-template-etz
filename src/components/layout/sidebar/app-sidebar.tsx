"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    // SidebarRail,
} from "@/components/ui/sidebar";
import { NavItems } from "./nav-items";
import { NavUser } from "./nav-user";
import NavMain from "./nav-main";

// import NavUser from "./nav-user";

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="shadow-xs" variant="floating" {...props}>
            <SidebarHeader className="pl-4">
                <SidebarMenu>
                    <SidebarMenuItem className="mt-5 h-6 w-25.75">
                        {/* Put your Logo here */}
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-5">
                <NavMain items={NavItems.main} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            {/* <SidebarRail /> */}
        </Sidebar>
    );
}
