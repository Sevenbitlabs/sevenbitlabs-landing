# Sevenbitlabs Landing Page

A modern landing page built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Contact form with email notifications
- Modern UI components
- Dark theme

## Setup

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Configure environment variables:
```bash
cp .env.example .env.local
```

3. Set up Resend API Key:
   - Sign up at [Resend](https://resend.com)
   - Get your API key from the [API Keys page](https://resend.com/api-keys)
   - Add it to your `.env.local` file:
     ```
     RESEND_API_KEY=re_your_api_key_here
     ```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form

The contact form sends email notifications to `ceo@sevenbitlabs.com` using the Resend email service. Make sure to configure the `RESEND_API_KEY` environment variable for the form to work properly.

## Build

To build for production:

```bash
npm run build
npm run start
```

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/) - Email service
- [Radix UI](https://www.radix-ui.com/) - UI components
