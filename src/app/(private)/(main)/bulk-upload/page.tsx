import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { MoveLeft } from "lucide-react";
import { StepCard } from "./step-card";
import FileUpload from "./file-upload";
import Link from "next/link";
import SvgHistory from "@/components/icons/History";

export default function BulkUploadPage() {
    return (
        <Container className="mt-10">
            <section>
                <Link href="/dashboard" className="flex items-center gap-4">
                    <MoveLeft color="var(--color-primary)" />
                    <Typography as="span" variant="primary" size="h1" weight="bold">
                        Bulk Upload
                    </Typography>
                </Link>
            </section>
            <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-center">
                <div className="mb-4 self-end">
                    <Link
                        href="/history"
                        className="text-primary group flex items-center gap-2 font-bold"
                    >
                        <SvgHistory />
                        <span className="group-hover:underline">View History</span>
                    </Link>
                </div>
                <section className="border-border rounded-nrs-xs flex w-full flex-col gap-4 border p-10">
                    <StepCard
                        title="Step 1: Download Template"
                        description="Download the standardised CSV template and populate it with your
                    invoice data"
                        actionText="Download CSV Template"
                    />
                    <StepCard
                        title="Step 2: Download Code Template "
                        description=" Download the standardised CSV template and populate it with your
                    invoice data"
                        actionText="Download Code Template"
                    />
                    <div className="rounded-nrs-xs p-5 shadow-xs">
                        <div className="mt-3">
                            <FileUpload />
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}
