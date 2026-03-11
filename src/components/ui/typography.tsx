import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("py-0", {
    variants: {
        variant: {
            default: "text-dark!",
            white: "text-white!",
            primary: "text-primary!",
            slate: "text-slate-text!"
        },
        size: {
            h1: "text-h1",
            h2: "text-h2",
            h3: "text-h3",
            h4: "text-h4",
            h5: "text-h5",
            psm: "text-psm",
            pmd: "text-pmd",
            plg: "text-plg",
        },
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
    },
    compoundVariants: [{ size: "h2", class: "font-semibold" }],
    defaultVariants: {
        variant: "default",
        weight: "normal",
        size: "h1",
    },
});

type HTMLTag = "h1" | "p" | "span" | "ul";

interface ITypographyProps
    extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
    title?: string;
    className?: string;
    as?: HTMLTag;
    children: React.ReactNode;
}

function Typography({
    as: Component = "h1",
    className = "",
    size,
    weight,
    variant,
    title,
    children,
    ...props
}: ITypographyProps) {
    return (
        <Component
            className={cn(typographyVariants({ variant, size, weight, className }))}
            {...props}
        >
            {children || title}
        </Component>
    );
}

Typography.displayName = "Typography";

export { Typography, typographyVariants };
