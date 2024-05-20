"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import type z from "zod";

import { notify } from "@/components/toaster/toaster";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/zodSchema/contact";

import { contactUs } from "../services/contact-service";

type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const t = useTranslations("home");

  const form = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await contactUs(data);

      notify(response.data.message, "Success");
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return notify(value[0], "Error");
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("yourName")}</FormLabel>
                <FormControl>
                  <Input placeholder={`${t("name")}:`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("yourEmail")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`${t("email")}:`}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("yourPhone")}</FormLabel>
              <FormControl>
                <Input placeholder={`${t("phone")}:`} type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("yourQuestion")}</FormLabel>
              <FormControl>
                <Input placeholder={`${t("subject")}:`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("yourMessage")}</FormLabel>
              <FormControl>
                <Textarea placeholder={`${t("message")}:`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="lg" type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 size-4 animate-spin" />
          )}
          {t("sendMessage")}
        </Button>
      </form>
      <Toaster />
    </Form>
  );
};

export default ContactForm;
