"use client";

import { useState } from "react";
// import useAppStore from "@/store/app-store";
// import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PasswordField from "@/components/form/password-field";

export default function ResetPasswordForm() {
    // const handleOpen = useAppStore((state) => state.handleOpen);
    const { control } = useForm({
        // resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            new_password: "",
            confirm_password: "",
        },
    });

    const [showPassword, setShowPassword] = useState({
        new_password: false,
        confirm_password: false,
    });

    const handleShowPassword = (field: keyof typeof showPassword) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <form className="mt-6 space-y-8 md:mt-8 md:space-y-10" onSubmit={() => {}}>
            <div className="space-y-1 text-gray-700">
                <Label htmlFor="email">New Password</Label>
                <PasswordField
                    id="new_password"
                    className="w-full"
                    control={control}
                    name="new_password"
                    type={showPassword.new_password ? "text" : "password"}
                    onIconClick={() => handleShowPassword("new_password")}
                    showPassword={showPassword.new_password}
                    placeholder="New password"
                    autoComplete="new-password"
                />
            </div>

            <div className="space-y-1 text-gray-700">
                <Label htmlFor="email">Confirm New Password</Label>
                <PasswordField
                    id="confirm_password"
                    className="w-full"
                    control={control}
                    name="confirm_password"
                    type={showPassword.new_password ? "text" : "password"}
                    onIconClick={() => handleShowPassword("confirm_password")}
                    showPassword={showPassword.confirm_password}
                    placeholder="Confirm new password"
                    autoComplete="confirm-password"
                />
            </div>

            <div className="space-y-2">
                <Button
                    className="w-full"
                    // isLoading={isPending}
                    // disabled={isPending || !token}
                >
                    Submit
                </Button>
                <p className="text-sm">
                    Don’t have an account?{" "}
                    <Link href={"/login"} className="text-primary hover:underline">
                        Create an account
                    </Link>{" "}
                </p>
            </div>
        </form>
    );
}
