import { ErrorMessage } from "@hookform/error-message";
import { Control, useController, UseControllerProps } from "react-hook-form";

import { cn } from "@/lib/utils";

interface InputProps
    extends
        UseControllerProps,
        Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
    label?: string;
    type?: string;
    asterik?: boolean;
    icon?: any;
    className?: string;
    control: Control<any>;
    iconPosition?: "left" | "right";
}

const errorStyle = `ring ring-destructive border-none focus:ring focus:ring-destructive`;

export default function TextField(props: InputProps) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const {
        type = "text",
        name,
        label = "",
        asterik = false,
        icon = "",
        className = "",
        iconPosition = "left",
        ...others
    } = props;

    const hasError = !!errors[name]?.message;

    const baseClass = cn(
        `input-control`,
        "placeholder:text-sm placeholder:font-light placeholder:text-gray-400",
        icon && iconPosition === "left" && "pl-9",
        icon && iconPosition === "right" && "pr-9",
        isTouched && hasError && errorStyle,
        hasError && errorStyle,
        className
    );

    return (
        <>
            {label && (
                <label htmlFor="username" className="input-label">
                    {asterik && <span className="mr-1.5 text-[#DB1813]">*</span>}
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div
                        className={cn(
                            "pointer-events-none absolute inset-y-0 flex items-center px-2.5",
                            iconPosition === "left" && "left-0",
                            iconPosition === "right" && "right-0"
                        )}
                    >
                        <span>{icon}</span>
                    </div>
                )}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={baseClass}
                    {...others}
                />
            </div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className="mt-1 text-sm text-red-500">{message}</p>
                )}
            />
        </>
    );
}
