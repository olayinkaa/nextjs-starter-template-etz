import { z } from "zod";
import { passwordRegExp } from "./regex";

export const BaseSchema = z.object({
    email: z.email(),
    name: z.string().min(1, "Name is required"),
    token: z.string().min(6, "Token is required"),
    username: z.string().min(1, { message: "Username is required" }),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    description: z.string().min(1, "Description is required"),
    password: z.string().min(1, "Password is required"),
    passwordRegex: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(passwordRegExp, {
            message: "Invalid password format",
        }),
});
