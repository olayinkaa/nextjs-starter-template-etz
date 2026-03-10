import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const headingVariants = cva("py-0", {
    variants: {
        variant: {
            default: "text-dark",
            white: "text-white",
            primary: "text-primary",
        },
        size: {
            h3: "text-h3",
            h4: "text-h4",
            h4b: "text-h4b",
            h5: "text-h5",
            psm: "text-psm",
            pmd: "text-pmd",
        },
        weight: {
            light: "font-light!",
            normal: "font-normal!",
            medium: "font-medium!",
            semibold: "font-semibold!",
            bold: "font-bold!",
        },
    },
    compoundVariants: [{ size: "h3", class: "font-semibold" }],
    defaultVariants: {
        variant: "default",
        weight: "normal",
    },
});

type HTMLTag = "h1" | "p" | "span" | "ul";

interface ITypographyProps
    extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headingVariants> {
    title?: string;
    className?: string;
    as?: HTMLTag;
    children: React.ReactNode;
}

export default function Typography({
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
            className={cn(headingVariants({ variant, size, weight, className }))}
            {...props}
        >
            {children || title}
        </Component>
    );
}

Typography.displayName = "Typography";
