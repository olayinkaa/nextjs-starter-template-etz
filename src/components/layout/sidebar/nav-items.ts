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
    dashboard: [
        {
            title: "Dashboard",
            path: "/dashboard",
            iconKey: "dashboard",
        },
    ],
    main: [
        {
            title: "Product",
            path: "/product",
            iconKey: "box",
        },
        {
            title: "User",
            path: "/user",
            iconKey: "user",
        },
    ],
    setting: [
        {
            title: "Settings",
            path: "/settings/profile",
            iconKey: "setting",
        },
    ],
};
