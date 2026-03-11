import { SidebarGroup, SidebarGroupContent, SidebarMenu } from "@/components/ui/sidebar";
import Menu from "./menu";
import { MenuList } from "./nav-items";
import Submenu from "./submenu";

export default function NavMain({ items }: { items: MenuList[] }) {
    return (
        <SidebarGroup className="p-0">
            <SidebarGroupContent>
                <SidebarMenu className="flex flex-col justify-end gap-6">
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
