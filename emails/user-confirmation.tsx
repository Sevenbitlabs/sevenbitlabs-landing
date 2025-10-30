import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface UserConfirmationEmailProps {
  name: string;
  message: string;
}

export const UserConfirmationEmail = ({
  name,
  message,
}: UserConfirmationEmailProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting SEVENBITLABS</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerHeading}>Thank You for Reaching Out!</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>Hi {name},</Text>

            <Text style={paragraph}>
              Thank you for contacting <strong>SEVENBITLABS</strong>. We've
              received your message and our team will review it shortly.
            </Text>

            <Section style={messageBox}>
              <Text style={messageLabel}>Your Message:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Text style={paragraph}>
              We typically respond within 24-48 hours during business days. If
              your inquiry is urgent, please feel free to reach out to us
              directly.
            </Text>

            <Text style={paragraph}>
              In the meantime, feel free to explore our services and previous
              work on our website.
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              <strong>The SEVENBITLABS Team</strong>
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              © {currentYear} SEVENBITLABS. All rights reserved.
            </Text>
            <Text style={footerText}>
              This is an automated confirmation email. Please do not reply to
              this message.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default UserConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  padding: "30px",
  textAlign: "center" as const,
  borderRadius: "8px 8px 0 0",
};

const headerHeading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
};

const content = {
  backgroundColor: "#f9fafb",
  padding: "30px",
  borderRadius: "0 0 8px 8px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333333",
  margin: "0 0 16px 0",
};

const messageBox = {
  backgroundColor: "#ffffff",
  borderLeft: "4px solid #10b981",
  padding: "15px",
  margin: "20px 0",
  borderRadius: "4px",
};

const messageLabel = {
  fontSize: "14px",
  color: "#6b7280",
  fontWeight: "600",
  margin: "0 0 10px 0",
};

const messageText = {
  fontSize: "16px",
  color: "#1f2937",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const signature = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333333",
  margin: "30px 0 0 0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};

const footer = {
  textAlign: "center" as const,
  padding: "20px",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "4px 0",
};
