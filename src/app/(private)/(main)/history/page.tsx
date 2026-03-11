import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
    return (
        <Container className="mt-10">
            <section>
                <Link href="/dashboard" className="flex items-center gap-4">
                    <MoveLeft color="var(--color-primary)" />
                    <Typography as="span" variant="primary" size="h1" weight="bold">
                        History
                    </Typography>
                </Link>
            </section>
        </Container>
    );
}
