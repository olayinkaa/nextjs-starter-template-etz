"use client";

import { useState } from "react";
import { LoginInputs, LoginSchema } from "@/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import PasswordField from "@/components/form/password-field";
import TextField from "@/components/form/text-field";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit } = useForm<LoginInputs>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex flex-col gap-5">
                <div>
                    <TextField
                        id="username"
                        label="Staff ID"
                        control={control}
                        name="username"
                        // autoComplete="current-email"
                    />
                </div>

                <div>
                    <PasswordField
                        label="Password"
                        name="password"
                        control={control}
                        type={showPassword ? "text" : "password"}
                        onIconClick={() => handleShowPassword()}
                        showPassword={showPassword}
                        autoComplete="new-password"
                    />
                </div>
            </section>
            <div className="my-6 flex justify-end">
                <Button
                    className="h-12.5 w-full disabled:bg-primary/70"
                    label="Sign In"
                    type="submit"
                    disabled
                    isLoading
                />
            </div>
        </form>
    );
}
