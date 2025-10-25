import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const sendEmail = async (to: string, subject: string, html: string) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "MOS Studio <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }

  return await response.json();
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact form emails for:", { name, email, phone });

    // Email to admin
    const adminEmailHtml = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu mesaj MOS Studio web sitesi iletişim formundan gönderildi.</p>
    `;

    const adminEmail = await sendEmail(
      "mospersonalcoaching@gmail.com",
      `Yeni İletişim Formu Mesajı - ${name}`,
      adminEmailHtml
    );

    console.log("Admin email sent:", adminEmail);

    // Try to send confirmation email to user (optional - may fail if domain not verified)
    let userEmailId = null;
    try {
      const userEmailHtml = `
        <h2>Merhaba ${name},</h2>
        <p>Mesajınız bize ulaşmıştır. En kısa zamanda size geri dönüş yapacağız.</p>
        <p>İletişim bilgilerimiz:</p>
        <ul>
          <li><strong>Telefon:</strong> +90 532 301 1997</li>
          <li><strong>E-posta:</strong> mospersonalcoaching@gmail.com</li>
          <li><strong>Instagram:</strong> @mos.personaltraining</li>
          <li><strong>Adres:</strong> Demircikara Mahallesi, 1431 Sokak No:8/1, Antalya-Muratpaşa</li>
        </ul>
        <hr>
        <p><strong>Gönderdiğiniz mesaj:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Teşekkürler!<br>MOS Personal Training Studio</p>
      `;

      const userEmail = await sendEmail(
        email,
        "Mesajınız Bize Ulaştı - MOS Studio",
        userEmailHtml
      );

      console.log("User confirmation email sent:", userEmail);
      userEmailId = userEmail.id;
    } catch (userEmailError: any) {
      // User email failed (likely due to unverified domain), but admin email succeeded
      console.log("User confirmation email failed (expected if domain not verified):", userEmailError.message);
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        adminEmailId: adminEmail.id,
        userEmailId: userEmailId 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
