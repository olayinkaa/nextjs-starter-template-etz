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
                    "--sidebar-width": "250px",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset className="overflow-y-auto">
                <TopHeader />
                <div className="bg-grey-50 flex flex-1 flex-col">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
