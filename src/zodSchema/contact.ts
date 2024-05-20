import validator from "validator";
import z from "zod";

export const contactSchema = z
  .object({
    full_name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    phone: z.string().refine(validator.isMobilePhone, {
      message: "Invalid phone number",
    }),
    subject: z.string().min(1, { message: "Question is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  })
  .partial();

export type Contact = z.infer<typeof contactSchema>;
