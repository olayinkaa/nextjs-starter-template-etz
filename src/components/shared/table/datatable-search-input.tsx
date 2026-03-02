import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type IProps = {
    value: string | number;
    onChange: (val: string | number) => void;
    debounce?: number;
    className?: string;
    wrapperClassName?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export default function DatatableSearchInput({
    value: initialValue,
    onChange,
    debounce = 1000,
    className = "",
    wrapperClassName = "",
    ...props
}: IProps) {
    const [value, setValue] = useState<number | string>(initialValue);
    const inputRef = useRef<any>(null);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value, debounce, onChange]);

    useEffect(() => {
        if (value) {
            inputRef.current?.focus();
        }
    }, [value]);

    return (
        <div className={cn("group relative", wrapperClassName)}>
            <input
                type="text"
                className={cn(
                    "focus:ring-primary-200 border-border border",
                    "block w-full rounded-md py-2 pl-10",
                    "transition-all outline-none placeholder:text-sm",
                    className
                )}
                value={value}
                onChange={handleInputChange}
                ref={inputRef}
                {...props}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                <Search size={20} />
            </div>
        </div>
    );
}
