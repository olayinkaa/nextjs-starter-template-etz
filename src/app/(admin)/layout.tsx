import DashboardLayout from "@/components/layout";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
