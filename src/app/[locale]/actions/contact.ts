"use server";

import ky from "@/lib/ky";
import { type Contact, contactSchema } from "@/zodSchema/contact";

type ContactResponse = {
  message: string;
};

export const contactAction = (data: Contact) => {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    console.error(validatedFields.error);
    throw new Error("Invalid fields");
  }

  return ky
    .post("contact-us/create", {
      json: data,
    })
    .json<ContactResponse>();
};
