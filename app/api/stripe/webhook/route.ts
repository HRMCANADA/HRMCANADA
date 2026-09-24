import { NextResponse } from 'next/server';

// Stripe webhooks are intentionally disabled.
// This placeholder prevents Stripe credentials from being required during build.

export async function POST() {
  return NextResponse.json(
    { error: 'Stripe webhooks are currently disabled.' },
    { status: 503 }
  );
}
