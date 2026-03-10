import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/shared/container";

export default function PublicLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section className="flex min-h-screen w-screen flex-col bg-white">
            <PageContainer className="mx-auto p-0 2xl:px-0!">
                <Link href="/" className="flex h-16 w-fit items-center py-4">
                    <Image src="/images/png/logo1.png" alt="Logo" width={120} height={40} />
                </Link>
            </PageContainer>
            <PageContainer className="mx-auto mt-10 flex-1 2xl:px-0!">
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                    {children}
                    <div className="flex items-center justify-center md:flex">
                        <Image
                            src="/images/svg/frame.svg.svg"
                            alt="Login Illustration"
                            width={2000}
                            height={1200}
                            className="h-auto w-[95%] translate-x-4 object-contain"
                        />
                    </div>
                </div>
            </PageContainer>
            <footer className="w-full bg-gray-100 py-4 text-center text-xs text-gray-500">
                Think fast, Act faster, Work smart, Innovate...
            </footer>
        </section>
    );
}
