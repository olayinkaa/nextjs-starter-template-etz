import { z } from "zod";
import { BaseSchema } from "./@base-schema";

export const LoginSchema = BaseSchema.pick({
    username: true,
    password: true,
});

export type LoginInputs = z.infer<typeof LoginSchema>;
