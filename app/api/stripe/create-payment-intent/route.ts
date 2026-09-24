import { NextResponse } from 'next/server';

// Stripe payments are intentionally disabled.
// The original Stripe implementation has been commented out/removed from execution
// so the application can build and deploy without STRIPE_SECRET_KEY.

export async function POST() {
  return NextResponse.json(
    { error: 'Stripe payments are currently disabled.' },
    { status: 503 }
  );
}
