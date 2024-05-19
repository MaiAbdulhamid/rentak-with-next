import validator from "validator";
import z from "zod";

export const contactSchema = z
  .object({
    full_name: z.string(),
    email: z.string().email(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    phone: z.string().refine(validator.isMobilePhone),
    subject: z.string(),
    message: z.string(),
  })
  .partial();

export type Contact = z.infer<typeof contactSchema>;
