import Link from "next/link";
import { PageContainer } from "@/components/shared/container";
import { EtranzactLogo, LandingIcon } from "@/components/icons";

export default function PublicLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section className="flex min-h-screen w-screen flex-col bg-white">
            <PageContainer className="mx-auto p-0 2xl:px-0!">
                <Link href="/" className="flex h-16 w-fit items-center py-4">
                    <EtranzactLogo className="h-5 w-31.25" />
                </Link>
            </PageContainer>
            <PageContainer className="mx-auto mt-20 flex-1 2xl:px-0!">
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                    {children}
                    <div className="flex items-center justify-center md:flex">
                        <LandingIcon className="rounded-nrs-xs hiddens h-179 w-[693.41px]" />
                    </div>
                </div>
            </PageContainer>
            <footer className="w-full bg-gray-100 py-4 text-center text-xs text-gray-500">
                Think fast, Act faster, Work smart, Innovate...
            </footer>
        </section>
    );
}
