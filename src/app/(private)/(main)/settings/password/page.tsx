import { Typography } from "@/components/ui/typography";

export default function page() {
    return (
        <div className="p-8">
            <Typography size="h3" weight="medium" className="mb-2">
                Password Settings
            </Typography>
            <Typography as="p" size="pmd" variant="slate">
                Manage your password credentials
            </Typography>
            <div className="bg-warning mt-6 rounded-xl p-5 flex flex-col gap-2">
                <Typography
                    as="h1"
                    size="pmd"
                    weight="medium"
                    className="text-warning-500!"
                >
                    Security Notice
                </Typography>
                <Typography as="p" size="pmd" className="text-warning-400!">
                    For security reasons, you&apos;ll be logged out after changing your
                    password and will need to sign in again.
                </Typography>
            </div>
        </div>
    );
}
