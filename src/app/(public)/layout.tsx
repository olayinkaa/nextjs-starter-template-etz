export default function PublicLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section className="flex min-h-screen w-screen flex-col bg-white">
            {children}
        </section>
    );
}
