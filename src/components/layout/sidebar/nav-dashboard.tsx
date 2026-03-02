import { SidebarGroup, SidebarGroupContent, SidebarMenu } from "@/components/ui/sidebar";
import Menu from "./menu";
import { MenuList } from "./nav-items";

export default function NavDasboard({ items }: { items: MenuList[] }) {
    return (
        <SidebarGroup className="p-0">
            <SidebarGroupContent>
                <SidebarMenu className="flex flex-col gap-3">
                    {items?.map((item) => {
                        return <Menu key={item.path} item={item} />;
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
