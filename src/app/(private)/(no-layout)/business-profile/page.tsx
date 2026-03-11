"use client";

import { CompanyIcon } from "@/components/icons";
import { Typography } from "@/components/ui/typography";

export default function BusinessProfileForm() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-sky-100 p-4">
            <div className="pointer-events-none fixed top-0 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 opacity-30 blur-3xl" />
            <div className="pointer-events-none fixed right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-sky-300 opacity-20 blur-3xl" />

            <div className="relative w-full max-w-130.25">
                <div className="rounded-3xl border border-white/60 bg-white/80 px-8 py-10 shadow-[0_8px_48px_rgba(0,0,0,0.10)] backdrop-blur-xl">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-center">
                        <CompanyIcon className="bg-primary-100 size-13 rounded-full border p-1" />
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900"></h1>
                        <Typography weight="bold" size="h2">
                            Complete Your Business Profile
                        </Typography>
                        <Typography as="p" size="pmd" variant="slate">
                            This one-time setup is required before you can create invoices
                        </Typography>
                    </div>
                    <form>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
