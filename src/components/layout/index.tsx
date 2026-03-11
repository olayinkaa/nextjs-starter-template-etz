import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TopHeader from "@/components/layout/header/top-header";
import AppSidebar from "@/components/layout/sidebar/app-sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "10rem",
                } as React.CSSProperties
            }
            defaultOpen={false}
        >
            <AppSidebar collapsible="icon" variant="sidebar" />
            <SidebarInset className="overflow-y-auto">
                <TopHeader />
                <div className="bg-background flex flex-1 flex-col">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
