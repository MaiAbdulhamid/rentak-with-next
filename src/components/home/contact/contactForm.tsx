"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTTPError } from "ky";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { contactAction } from "@/app/[locale]/actions/contact";
import {
  EmailInput,
  Form,
  PhoneNumberInput,
  SubmitButton,
  TextareaInput,
  TextInput,
} from "@/components/ui/Form";
import { useToast } from "@/hooks/useToast";
import { contactSchema } from "@/zodSchema/contact";

const ContactForm = () => {
  const t = useTranslations("home.contact");
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const response = await contactAction(data);

      toast({
        title: "Success",
        description: response.message,
      });
    } catch (error) {
      if (error instanceof HTTPError && error.response.status === 400) {
        const errors = await error.response.json();

        Object.entries(errors.errors).map(([_key, value]: any) => {
          return toast({
            title: "Error",
            description: value[0],
            variant: "destructive",
          });
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    }
  });
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <TextInput
            control={form.control}
            name="full_name"
            label={t("yourName")}
            placeholder={`${t("name")}:`}
          />
          <EmailInput
            control={form.control}
            name="email"
            label={t("yourEmail")}
            placeholder={`${t("email")}:`}
          />
        </div>
        <PhoneNumberInput
          control={form.control}
          name="phone"
          label={t("yourPhone")}
          placeholder={`${t("phone")}:`}
        />
        <TextInput
          control={form.control}
          name="subject"
          label={t("yourQuestion")}
          placeholder={`${t("subject")}:`}
        />
        <TextareaInput
          control={form.control}
          name="message"
          label={t("yourMessage")}
          placeholder={`${t("message")}:`}
        />
        <SubmitButton
          size="lg"
          type="submit"
          isSubmitting={form.formState.isSubmitting}
          text={t("sendMessage")}
        />
      </form>
    </Form>
  );
};

export default ContactForm;
