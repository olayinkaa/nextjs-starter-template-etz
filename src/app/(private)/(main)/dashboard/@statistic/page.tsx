import { ArchiveDown, InvoiceIcon, SignPost, Star } from "@/components/icons";
import { Typography } from "@/components/ui/typography";

export default function page() {
    return (
        <section className="mt-10 grid grid-cols-4 gap-4">
            <div className="border-border rounded-nrs-md flex flex-col gap-5 border p-6 shadow-xs">
                <div className="flex items-center gap-3">
                    <InvoiceIcon className="bg-slate size-6 rounded-full" />
                    <Typography size="plg">Total Invoice Submitted</Typography>
                </div>
                <Typography weight="bold" size="h2">
                    140
                </Typography>
            </div>
            <div className="border-border rounded-nrs-md flex flex-col gap-5 border p-6 shadow-xs">
                <div className="flex items-center gap-3">
                    <ArchiveDown className="bg-slate size-6 rounded-full" />
                    <Typography size="plg">Successfully Signed</Typography>
                </div>
                <Typography weight="bold" size="h2">
                    140
                </Typography>
            </div>
            <div className="border-border rounded-nrs-md flex flex-col gap-5 border p-6 shadow-xs">
                <div className="flex items-center gap-3">
                    <SignPost className="bg-slate size-6 rounded-full" />
                    <Typography size="plg">Failed</Typography>
                </div>
                <Typography weight="bold" size="h2">
                    140
                </Typography>
            </div>
            <div className="border-border rounded-nrs-md flex flex-col gap-5 border p-6 shadow-xs">
                <div className="flex items-center gap-3">
                    <Star className="bg-slate size-6 rounded-full" />
                    <Typography size="plg">Success Rate</Typography>
                </div>
                <Typography weight="bold" size="h2">
                    78%
                </Typography>
            </div>
        </section>
    );
}
