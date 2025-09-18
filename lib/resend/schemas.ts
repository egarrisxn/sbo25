import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export const NewsletterSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
});
