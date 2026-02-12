import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { soortBestelling, naam, telefoon, email, bezorgadres, bezorgdatum, bezorgtijd, bericht } = await req.json();

    const htmlBody = `
      <h2>Nieuwe bestelling via de website</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Bestelling:</td><td>${soortBestelling}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Naam:</td><td>${naam}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Telefoon:</td><td>${telefoon}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">E-mail:</td><td>${email}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Bezorgadres:</td><td>${bezorgadres || '-'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Bezorgdatum:</td><td>${bezorgdatum || '-'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Bezorgtijd:</td><td>${bezorgtijd || '-'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Bericht:</td><td>${bericht || '-'}</td></tr>
      </table>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Madeliefste Bloemen <onboarding@resend.dev>',
        to: ['madeliefstebloemen@gmail.com'],
        subject: `Nieuwe bestelling van ${naam} - ${soortBestelling}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', data);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: data }), {
        status: res.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
