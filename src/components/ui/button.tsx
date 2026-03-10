import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";
import { MoreHorizontal } from "lucide-react";

const buttonVariants = cva(
    "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/80",
                primary: "bg-primary text-primary-foreground hover:bg-primary/80",
                success: "bg-success text-white shadow-custom-inset hover:bg-success/90",
                danger: "bg-danger text-danger-foreground shadow-custom-inset hover:bg-danger/90",
                outline:
                    "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
                ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
                destructive:
                    "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default:
                    "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
                lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
                icon: "size-9",
                "icon-xs":
                    "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
                "icon-sm":
                    "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
                "icon-lg": "size-10",
            },
            fullWidth: {
                true: "w-full",
            },
            disabled: {
                true: "disabled:cursor-not-allowed disabled:bg-muted-foreground/20 disabled:opacity-50 ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps {
    asChild?: boolean;
    label?: string;
    isLoading?: boolean;
    disabled?: boolean;
    loadingText?: string;
    children?: React.ReactNode;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    iconPosition?: "start" | "end";
    fullWidth?: boolean;
}

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    isLoading = false,
    disabled = false,
    loadingText = "Please wait",
    label = "",
    icon: Icon,
    iconPosition = "start",

    children,
    ref,
    ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & ButtonProps) {
    const Comp = asChild ? Slot.Root : "button";
    const renderContent = () => {
        if (children) return children;

        if (isLoading) {
            return (
                <div className="flex min-w-22.5 items-center justify-center gap-2">
                    <Spinner />
                    {loadingText && (
                        <span className="flex items-center capitalize">
                            {loadingText}
                            <MoreHorizontal size={20} className="ml-1 animate-pulse" />
                        </span>
                    )}
                </div>
            );
        }

        return (
            <div className="flex items-center gap-2">
                {Icon && iconPosition === "start" && <Icon size={18} />}
                <span>{label}</span>
                {Icon && iconPosition === "end" && <Icon size={18} />}
            </div>
        );
    };

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, disabled, className }))}
            ref={ref}
            disabled={disabled || isLoading}
            {...props}
        >
            {renderContent()}
        </Comp>
    );
}

export { Button, buttonVariants };
