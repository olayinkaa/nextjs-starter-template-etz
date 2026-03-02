"use client";

import { ChevronsUpDown, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
    const { isMobile } = useSidebar();
    const router = useRouter();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className={cn(
                                "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                                "border bg-white"
                            )}
                            variant="outline"
                        >
                            <>
                                <Avatar className="size-8">
                                    <AvatarImage
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent("Ibrahim Olayinka")}&background=FCD2C2&color=EB5017`}
                                    />
                                    <AvatarFallback className="bg-[#163A62] text-white">
                                        IB
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 gap-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">
                                        Ibrahim Olayinka
                                    </span>

                                    <span className="truncate text-xs">
                                        ibrahimolayinkaa@gmail.com
                                    </span>
                                </div>
                                <ChevronsUpDown className="ml-auto size-4" />
                            </>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-64 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="size-8">
                                    <AvatarImage
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent("Ibrahim Olayinka")}&background=FCD2C2&color=EB5017`}
                                    />
                                    <AvatarFallback className="bg-[#163A62] text-white">
                                        IB
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">
                                        Ibrahim Olayinka
                                    </span>

                                    <span className="truncate text-xs">
                                        ibrahimolayinkaa@gmail.com
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-1"
                            onClick={() => router.push("/settings")}
                        >
                            <Settings size={20} />
                            <span>Settings</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
