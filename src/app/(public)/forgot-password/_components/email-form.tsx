"use client";

import { useForgotPassword } from "@/@service/efirs/auth";
import useAppStore from "@/store/app-store";
import {
    ForgotPasswordSchema,
    ForgotPasswordInputs as Inputs,
} from "@/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { EntityType } from "@/types/enum";
import { Button } from "@/components/ui/button";
import TextField from "@/components/@form/text-field";

export default function EmailForm() {
    const handleOpen = useAppStore((state) => state.handleOpen);
    const { control, handleSubmit } = useForm<Inputs>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const { mutate: initiateForgotPassword, isPending } = useForgotPassword();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        initiateForgotPassword(data, {
            onSuccess: (res) => {
                toast.success(
                    res?.data?.message || "Password reset link sent to your email"
                );
                handleOpen(EntityType.RESET_PASSWORD);
            },
            onError: (error: any) => {
                const message =
                    error.response?.data.message || "Request failed. Please try again.";
                toast.error(message);
            },
        });
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    id="email"
                    label="Work Email Address"
                    control={control}
                    name="email"
                    autoComplete="current-email"
                />
            </div>
            <Button
                className="h-[50px] w-full"
                isLoading={isPending}
                disabled={isPending}
                label="Submit"
            />
        </form>
    );
}
