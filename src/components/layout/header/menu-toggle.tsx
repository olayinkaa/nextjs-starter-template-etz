"use client";

import { ChevronDown, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MenuToggle() {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer items-center space-x-1 outline-none">
                <Avatar className="size-8">
                    <AvatarImage
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent("Ibrahim Olayinka")}&background=FCD2C2&color=EB5017`}
                    />
                    <AvatarFallback className="bg-[#163A62] text-white">
                        IB
                    </AvatarFallback>
                </Avatar>
                <div className="mr-3 flex flex-col items-start">
                    <h4 className="truncate text-sm font-bold">Ibrahim Olayinka</h4>
                    <h3 className="text-xs"> Etranzact </h3>
                    <p className="text-xs">Last Login: Today </p>
                </div>
                <ChevronDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-tx-lg w-40">
                <DropdownMenuItem
                    className="rounded-tx-lg cursor-pointer"
                    onClick={() => router.push("/settings/profile")}
                >
                    <Settings size={20} color="var(--color-primary)" />
                    <span>Setting</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
