import ky from "@/lib/ky";

type ContactResponse = {
  message: string;
};

export function contactUs(data: Record<string, any>) {
  return ky
    .post("contact-us/create", {
      json: data,
    })
    .json<ContactResponse>();
}
