import { Resend } from "resend";
import { NextResponse } from "next/server";
import CompanyNotificationEmail from "@/emails/company-notification";
import UserConfirmationEmail from "@/emails/user-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email to company using Resend
    const companyEmailData = await resend.emails.send({
      from: "Contact Form <onboarding@updates.sevenbitlabs.com>",
      to: ["ceo@sevenbitlabs.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: CompanyNotificationEmail({ name, email, message }),
    });

    // Send confirmation email to user
    const confirmationEmailData = await resend.emails.send({
      from: "SEVENBITLABS <onboarding@updates.sevenbitlabs.com>",
      to: [email],
      subject: "Thank you for contacting SEVENBITLABS",
      react: UserConfirmationEmail({ name, message }),
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          companyEmail: companyEmailData,
          confirmationEmail: confirmationEmailData,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
