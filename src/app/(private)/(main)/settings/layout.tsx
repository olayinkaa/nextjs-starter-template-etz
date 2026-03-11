"use client";

import { Building, LockIcon } from "@/components/icons";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ChildrenProps } from "@/types/base";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsRoute = [
    {
        title: "Business Profile",
        href: "/settings",
        icon: Building,
    },
    {
        title: "Password Settings",
        href: "/settings/password",
        icon: LockIcon,
    },
];

export default function SettingsLayout({ children }: ChildrenProps) {
    const pathname = usePathname();

    return (
        <Container>
            <Link href="/dashboard" className="flex items-center gap-4">
                <MoveLeft color="var(--color-primary)" />
                <Typography as="span" variant="primary" size="h1" weight="bold">
                    Settings
                </Typography>
            </Link>
            <div className="mx-auto max-w-2xl px-6 py-0">
                <div className="rounded-2xl bg-white shadow-lg">
                    <div className="flex border-b">
                        {SettingsRoute.map((route) => {
                            const isActive = pathname === route.href;
                            const Icon = route.icon;
                            return (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "text-pmd flex w-1/2 items-center justify-center gap-2 px-6 py-4 font-medium transition-all",
                                        isActive
                                            ? "border-primary text-primary border-b-3"
                                            : "text-foreground border-b-3 border-transparent hover:text-gray-700"
                                    )}
                                >
                                    <Icon />
                                    {route.title}
                                </Link>
                            );
                        })}
                    </div>
                    {children}
                </div>
            </div>
        </Container>
    );
}
