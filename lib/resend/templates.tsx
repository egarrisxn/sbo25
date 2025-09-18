import * as React from "react";
import { Html, Text, Heading, Link } from "@react-email/components";

interface WelcomeNewsletterTemplateProps {
  email: string;
}

export function WelcomeNewsletterTemplate({
  email,
}: WelcomeNewsletterTemplateProps) {
  return (
    <Html>
      <Heading as='h1'>Welcome to Our Newsletter!</Heading>
      <Text>
        Thank you for subscribing, {email}! You are now part of our community.
      </Text>
      <Text>
        We are excited to share the latest updates, news, and special offers
        with you.
      </Text>
      <Text>Stay tuned!</Text>
    </Html>
  );
}

interface MonthlyNewsletterTemplateProps {
  email?: string;
  newsletter: string;
}

export function MonthlyNewsletterTemplate({
  email,
  newsletter,
}: MonthlyNewsletterTemplateProps) {
  return (
    <Html>
      <Heading as='h1'>Your Monthly Newsletter!</Heading>
      {email && <Text>Hello, {email}!</Text>}
      <div dangerouslySetInnerHTML={{ __html: newsletter }} />
      <Text>Thank you for being a part of our community.</Text>
    </Html>
  );
}

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactTemplate({
  name,
  email,
  message,
}: ContactTemplateProps) {
  return (
    <Html>
      <Heading as='h1'>New Contact Form Submission</Heading>
      <Text>
        You have received a new message from <strong>{name}</strong>.
      </Text>
      <Heading as='h2'>Message Details:</Heading>
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
        </li>
      </ul>
      <Heading as='h2'>Message:</Heading>
      <Text>{message}</Text>
    </Html>
  );
}
