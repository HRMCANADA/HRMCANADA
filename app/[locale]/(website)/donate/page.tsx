import type { Metadata } from "next";
// DONATIONS DISABLED — will be re-enabled when charity status is confirmed
// import { sanityFetch } from "@/app/[locale]/lib/sanity/client";
// import {
//   DONATION_PROJECTS_QUERY,
//   type DonationPortalProject,
// } from "../lib/sanity/donationProjects";
// import DonateClient from "./DonateClient";
// import JsonLd from "../components/JsonLd";
// import { BASE_URL, buildDonateAction, buildBreadcrumb } from "../lib/jsonld";

export const metadata: Metadata = {
  title: "Coming Soon | Human Relief Mission",
  description:
    "Donations will be available soon. We are working on becoming a registered charity.",
};

export default async function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string; step?: string }>;
}) {
  // DONATIONS DISABLED — will be re-enabled when charity status is confirmed
  return (
    <div className="bg-brand-white p-8 md:p-10 rounded-2xl shadow-card border border-brand-lgrey text-center min-h-screen flex items-center justify-center">
      <div className="max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 font-body">
          Donations Coming Soon
        </h1>
        <p className="text-[1rem] text-brand-grey leading-relaxed mb-8 font-medium">
          We are currently in the process of becoming a registered charity. 
          Donations will be available very soon. Thank you for your patience and support!
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 font-bold text-base cursor-pointer transition-all duration-200 no-underline px-8 py-4 bg-purple text-brand-white hover:bg-purple-dark hover:-translate-y-0.5 hover:shadow-btn-purple rounded-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

/* DONATIONS DISABLED — Full donate page commented out below — will be re-enabled when charity status is confirmed

import type { Metadata } from "next";
import { sanityFetch } from "@/app/[locale]/lib/sanity/client";
import {
  DONATION_PROJECTS_QUERY,
  type DonationPortalProject,
} from "../lib/sanity/donationProjects";
import DonateClient from "./DonateClient";
import JsonLd from "../components/JsonLd";
import { BASE_URL, buildDonateAction, buildBreadcrumb } from "../lib/jsonld";

export const metadata: Metadata = {
  title: "Donate Now | Human Relief Mission",
  description:
    "Donate online securely to support urgent humanitarian aid, water projects, healthcare, orphan sponsorship and income generation projects.",
  alternates: {
    canonical: `${BASE_URL}/donate`,
  },
  openGraph: {
    title: "Donate Now | Human Relief Mission",
    description:
      "Donate online securely to support urgent humanitarian aid, water projects, healthcare, orphan sponsorship and income generation projects.",
    url: `${BASE_URL}/donate`,
    siteName: "Human Relief Mission",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate Now | Human Relief Mission",
    description:
      "Donate online securely to support urgent humanitarian aid worldwide.",
  },
};

export default async function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string; step?: string }>;
}) {
  const { project: initialProjectSlug, step: initialStep } = await searchParams;
  const projects = await sanityFetch<DonationPortalProject[]>(DONATION_PROJECTS_QUERY);

  const parsedStep = initialStep ? Number.parseInt(initialStep, 10) : undefined;

  return (
    <>
      <JsonLd data={[
        buildDonateAction({ name: "Donate to Human Relief Mission", url: `${BASE_URL}/donate`, description: "Support Human Relief Mission's humanitarian projects worldwide. Choose a project and donate online securely." }),
        buildBreadcrumb([{ name: "Home", url: BASE_URL }, { name: "Donate", url: `${BASE_URL}/donate` }]),
      ]} />
      <DonateClient
        projects={projects ?? []}
        initialProjectSlug={initialProjectSlug}
        initialStep={Number.isFinite(parsedStep) ? parsedStep : undefined}
      />
    </>
  );
}

*/
