import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/ui/sidebar";
import Menu from "./menu";
import { MenuList } from "./nav-items";
import Submenu from "./submenu";

export default function NavMain({ items }: { items: MenuList[] }) {
    return (
        <SidebarGroup className="p-0">
            <SidebarGroupLabel className="text-slate-400 ml-1 rounded-none text-sm uppercase">
                Your business
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="flex flex-col gap-3">
                    {items?.map((item) => {
                        if (item?.subMenu) {
                            return <Submenu key={item.path} item={item} />;
                        }
                        return <Menu key={item.path} item={item} />;
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
