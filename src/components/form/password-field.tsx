import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { EyeIcon, EyeOff, LockKeyhole } from "lucide-react";
import { Control, useController, UseControllerProps } from "react-hook-form";
import { cn } from "@/lib/utils";

interface InputProps
    extends UseControllerProps,
        Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
    label?: string;
    type: string;
    asterik?: boolean;
    className?: string;
    control: Control<any>;
    onIconClick?: () => void;
    showLeftIcon?: boolean;
    showPassword?: boolean;
}

export default function PasswordField(props: InputProps) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const {
        name,
        type,
        label = "",
        asterik = false,
        onIconClick = undefined,
        className = "",
        showLeftIcon = true,
        showPassword = false,
        ...others
    } = props;

    const baseClass = cn(
        `input-control pr-12`,
        "placeholder:text-sm placeholder:text-gray-400 placeholder:font-light",
        {
            "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500":
                isTouched && !!errors[name]?.message,
            "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
                !!errors[name]?.message,
            "pl-9": showLeftIcon,
        },
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
                {showLeftIcon && (
                    <button
                        type="button"
                        className={cn(
                            "absolute inset-y-0 left-0 flex items-center px-2.5"
                        )}
                    >
                        <span>
                            <LockKeyhole size={20} />
                        </span>
                    </button>
                )}
                <button
                    type="button"
                    className={cn("absolute inset-y-0 right-0 flex items-center px-2.5")}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (onIconClick) onIconClick();
                    }}
                >
                    <span className="pr-3">
                        {showPassword ? (
                            <EyeOff size={20} className="text-gray-500" />
                        ) : (
                            <EyeIcon size={20} className="text-gray-500" />
                        )}
                    </span>
                </button>
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={baseClass}
                    // autoComplete="off"
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
