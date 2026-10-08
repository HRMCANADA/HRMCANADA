import { notFound } from "next/navigation";
import type { Metadata } from "next";

// The policies listing page is disabled. Restore the previous version of this
// file from git history to re-enable it. Individual policy pages
// (/policies/[policyslug]) remain available.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PoliciesPage() {
  notFound();
}
