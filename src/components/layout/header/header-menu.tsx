"use client";

import { LogOut, Settings } from "lucide-react";
// import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function HeaderMenu() {
    // const router = useRouter();

    return (
        <section className="flex items-center gap-4">
            <Avatar className="size-12">
                <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent("Ibrahim Olayinka")}&background=DEE9FF&color=0765FF`}
                />
                <AvatarFallback className="bg-primary text-white">NA</AvatarFallback>
            </Avatar>
            <h4 className="truncate text-sm font-bold">Ibrahim Olayinka</h4>
            <div className="flex items-center gap-7">
                <Link href="/settings">
                    <Settings size={20} />
                </Link>
                <button className="text-danger-200 size-4.5">
                    <LogOut size={20} />
                </button>
            </div>
        </section>
    );
}
