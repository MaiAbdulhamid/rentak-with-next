"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import type z from "zod";

import EmailInput from "@/components/form/EmailInput";
import PhoneNumberInput from "@/components/form/PhoneNumberInput";
import TextareaInput from "@/components/form/TextareaInput";
import TextInput from "@/components/form/TextInput";
import { contactSchema } from "@/zodSchema/contact";

type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const trans = useTranslations("home");
  const formMethods = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });
  const { isSubmitting, isValid, errors } = formMethods.formState;

  const onSubmit = (data: FormData) => {
    console.log(isSubmitting);
    console.log(data);
    console.log(isValid);
  };
  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <div className="grid lg:grid-cols-12 lg:gap-6">
        <div className="mb-5 lg:col-span-6">
          <TextInput
            label={trans("yourName")}
            name="full_name"
            placeholder={`${trans("name")} :`}
            control={formMethods.control}
            rules={{
              required: {
                value: require,
                message: "This field is required",
              },
            }}
          />
        </div>
        <div className="mb-5 lg:col-span-6">
          <EmailInput
            label={trans("yourEmail")}
            name="email"
            placeholder={`${trans("email")} :`}
            control={formMethods.control}
          />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="mb-5">
          <PhoneNumberInput
            label={trans("yourPhone")}
            name="phone"
            placeholder={`${trans("phone")} :`}
            control={formMethods.control}
          />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="mb-5">
          <TextInput
            label={trans("yourQuestion")}
            name="subject"
            placeholder={`${trans("subject")} :`}
            control={formMethods.control}
            rules={{ required: true }}
          />
        </div>

        <div className="mb-5">
          <TextareaInput
            label={trans("yourMessage")}
            name="message"
            placeholder={`${trans("message")} :`}
            control={formMethods.control}
          />
        </div>
      </div>
      <button
        type="submit"
        id="submit"
        name="send"
        className="btn rounded-md bg-primary-shade-3 text-white hover:bg-primary-shade-2"
      >
        {trans("sendMessage")}
      </button>
    </form>
  );
};

export default ContactForm;
