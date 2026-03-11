import { Typography } from "@/components/ui/typography";
import { Download } from "lucide-react";

export function StepCard({
    title,
    description,
    actionText,
}: {
    title: string;
    description: string;
    actionText: string;
}) {
    return (
        <div className="rounded-nrs-xs flex flex-col gap-3 bg-gray-50/10 p-4 shadow-xs">
            <Typography weight="medium" size="h3">
                {title}
            </Typography>
            <div className="flex items-center justify-between gap-4">
                <Typography variant="slate" size="psm">
                    {description}
                </Typography>
                <button className="text-primary text-pmd flex items-center gap-2 font-medium">
                    <Download size={20} />
                    <span>{actionText}</span>
                </button>
            </div>
        </div>
    );
}
