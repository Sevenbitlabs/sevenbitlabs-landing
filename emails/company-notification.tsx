import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface CompanyNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const CompanyNotificationEmail = ({
  name,
  email,
  message,
}: CompanyNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CompanyNotificationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0 48px",
};

const section = {
  padding: "0 48px",
  marginBottom: "24px",
};

const label = {
  fontSize: "14px",
  color: "#6b7280",
  fontWeight: "600",
  margin: "0 0 8px 0",
};

const value = {
  fontSize: "16px",
  color: "#1f2937",
  margin: "0",
};

const messageText = {
  fontSize: "16px",
  color: "#1f2937",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};
