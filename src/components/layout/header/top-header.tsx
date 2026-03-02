import { SidebarTrigger } from "@/components/ui/sidebar";
import MenuToggle from "./menu-toggle";

export default function TopHeader() {
    return (
        <header className="bg-grey-100 flex h-20 shrink-0 border-b border-[#2A36A42E]">
            <div className="flex w-full max-w-full items-center px-4">
                <div className="flex items-center gap-2">
                    <SidebarTrigger />
                </div>
                <div className="flex flex-1 items-center justify-end gap-4 md:w-40">
                    <MenuToggle />
                </div>
            </div>
        </header>
    );
}
