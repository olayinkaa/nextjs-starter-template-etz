import { LucideIconsMap } from "@/lib/icon";

export type MenuList = {
    title: string;
    path: string;
    iconKey?: keyof typeof LucideIconsMap;
    subMenu?: boolean;
    subMenuItems?: MenuList[];
    isActive?: boolean;
};

export type TNavItem = {
    main: MenuList[];
    secondary: MenuList[];
};

export const NavItems = {
    main: [
        {
            title: "Dashboard",
            path: "/dashboard",
            iconKey: "dashboard",
        },
        {
            title: "Bulk upload",
            path: "/bulk-upload",
            iconKey: "upload",
        },
        {
            title: "Manual Entry",
            path: "/manual-entry",
            iconKey: "notebook-pen",
        },
        {
            title: "History",
            path: "/history",
            iconKey: "history",
        },
        {
            title: "Settings",
            path: "/settings",
            iconKey: "setting",
        },
    ],
};
