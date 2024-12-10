import { z } from 'zod';

export const passwordSchema = z.string().min(4, { message: 'Please enter a valid password' });

export const formLoginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
    .merge(
        z.object({
            firstName: z.string().min(2, { message: 'Please enter a valid name' }),
            lastName: z.string().min(2, { message: 'Please enter a valid name' }),
            username: z.string().min(2, { message: 'Please enter a valid username' }),
            confirmPassword: passwordSchema,
        }),
    )
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
