import { NextResponse } from 'next/server';

// Stripe subscriptions are intentionally disabled.
// This endpoint remains as a safe placeholder so the app can build without Stripe credentials.

export async function POST() {
  return NextResponse.json(
    { error: 'Stripe subscriptions are currently disabled.' },
    { status: 503 }
  );
}
