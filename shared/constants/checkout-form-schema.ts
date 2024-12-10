import { z } from 'zod';

export const checkoutFormSchema = z.object({
    firstName: z.string().min(2, { message: 'The first name must contain at least 2 characters' }),
    lastName: z.string().min(2, { message: 'The last name must contain at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;