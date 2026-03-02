import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/ui/sidebar";
import { MenuList } from "./nav-items";
import Menu from "./menu";

export default function NavSecondary({ items }: { items: MenuList[] }) {
    return (
        <SidebarGroup className="p-0">
            <SidebarGroupLabel className="text-grey-400 ml-1 rounded-none text-sm uppercase">
                Others
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="flex flex-col gap-0">
                    {items?.map((item) => {
                        return <Menu key={item.path} item={item} />;
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
