"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTTPError } from "ky";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { contactAction } from "@/app/[locale]/actions/contact";
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
import { useToast } from "@/components/ui/use-toast";
import { contactSchema } from "@/zodSchema/contact";

const ContactForm = () => {
  const t = useTranslations("home");
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
    </Form>
  );
};

export default ContactForm;
