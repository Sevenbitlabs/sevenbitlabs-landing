# Email Templates

This directory contains React Email templates for the SEVENBITLABS landing page.

## Available Templates

### Company Notification Email

**File:** `company-notification.tsx`  
**Purpose:** Sent to the company when a user submits the contact form  
**Props:**

- `name: string` - The sender's name
- `email: string` - The sender's email
- `message: string` - The message content

### User Confirmation Email

**File:** `user-confirmation.tsx`  
**Purpose:** Sent to the user as a confirmation after form submission  
**Props:**

- `name: string` - The recipient's name
- `message: string` - The message they submitted (for their reference)

## Development

To preview and test email templates locally:

```bash
pnpm email:dev
```

This will start the React Email development server at `http://localhost:3000` where you can preview all email templates with hot reload.

## Usage

Email templates are used in the contact API route:

```typescript
import { CompanyNotificationEmail, UserConfirmationEmail } from "@/emails";

await resend.emails.send({
  from: "Contact Form <onboarding@updates.sevenbitlabs.com>",
  to: ["ceo@sevenbitlabs.com"],
  subject: "New Contact Form Submission",
  react: CompanyNotificationEmail({ name, email, message }),
});
```

## Styling

Email templates use inline styles for maximum email client compatibility. React Email automatically handles:

- HTML generation
- Plain text fallback
- Email client compatibility
- Responsive design

## Resources

- [React Email Documentation](https://react.email/docs/introduction)
- [React Email Components](https://react.email/docs/components/html)
