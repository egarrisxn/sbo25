"use server";

import type { ReactElement } from "react";
import { createClient } from "@/lib/supabase/server";
import {
  ContactTemplate,
  MonthlyNewsletterTemplate,
  WelcomeNewsletterTemplate,
} from "@/lib/resend/templates";
import { ContactSchema, NewsletterSchema } from "@/lib/resend/schemas";
import { RESEND, CONTACT_EMAIL_TO, NEWSLETTER_EMAIL_FROM } from "@/lib/env";
import type { FormState, FormResult } from "@/lib/types";

export async function sendContactMessage(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  if (!CONTACT_EMAIL_TO) {
    console.error("CONTACT_FORM_EMAIL_TO is not set in .env.local");
    return {
      message: "Server configuration error. Please try again later.",
      success: false,
    };
  }

  const validated = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validated.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validated.data;

  const emailResponse: FormResult = await RESEND.emails
    .send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      react: ContactTemplate({ name, email, message }) as ReactElement,
    })
    .then((res) => ({ success: true as const, res }))
    .catch((err) => ({ success: false as const, err }));

  if (!emailResponse.success) {
    console.error("Error sending contact email:", emailResponse.err);
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }

  return {
    message: "Your message has been sent successfully!",
    success: true,
  };
}

export async function subscribeToNewsletter(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  if (!NEWSLETTER_EMAIL_FROM) {
    console.error("NEWSLETTER_FORM_EMAIL_FROM is not set in .env.local");
    return {
      message: "Server configuration error. Please try again later.",
      success: false,
    };
  }

  const validated = NewsletterSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validated.success) {
    return {
      message: "Validation failed.",
      errors: validated.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { email } = validated.data;
  const supabase = await createClient();

  const { error } = await supabase.from("newsletter_signups").insert({ email });

  if (error) {
    console.error("Supabase insert error:", error);
    return {
      message: "Failed to save your subscription. Please try again.",
      success: false,
    };
  }

  const emailResponse: FormResult = await RESEND.emails
    .send({
      from: `Your Newsletter <${NEWSLETTER_EMAIL_FROM}>`,
      to: email,
      subject: "Welcome to the Newsletter!",
      react: WelcomeNewsletterTemplate({ email }) as ReactElement,
    })
    .then((res) => ({ success: true as const, res }))
    .catch((err) => ({ success: false as const, err }));

  if (!emailResponse.success) {
    console.error("Error sending newsletter email:", emailResponse.err);
    return {
      message: "Subscription saved, but failed to send welcome email.",
      success: false,
    };
  }

  return {
    message: `Thanks! A welcome email has been sent!.`,
    success: true,
  };
}

export async function sendNewsletter(_: any, formData: FormData) {
  const newsletterContent = formData.get("newsletter") as string;
  if (!newsletterContent) {
    return { success: false, message: "Newsletter content cannot be empty." };
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("newsletter_signups")
    .select("email");

  if (error) {
    console.error("Supabase fetch error:", error);
    throw new Error("Failed to fetch emails from the database.");
  }

  const recipientEmails = data.map((item) => item.email);

  if (recipientEmails.length === 0) {
    console.log("No subscribers to send to.");
    return { success: true, message: "No subscribers found." };
  }

  await RESEND.emails.send({
    from: `Your Newsletter <${NEWSLETTER_EMAIL_FROM}>`,
    to: recipientEmails,
    subject: "Your New Newsletter!",
    react: MonthlyNewsletterTemplate({
      newsletter: newsletterContent,
    }) as ReactElement,
  });

  console.log("Newest newsletter sent successfully.");
  return { success: true, message: "Newsletter sent successfully." };
}
