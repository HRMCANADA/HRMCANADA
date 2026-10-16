/**
 * JSON-LD structured data builders for humanreliefmission.ca
 *
 * All builders return plain objects — no runtime dependency.
 * Use with <JsonLd data={...} /> in any Server Component.
 */

export const BASE_URL = "https://humanreliefmission.ca";

// ─── Shared Organisation identity ───────────────────────────────────────────

const ORG_ID = `${BASE_URL}/#organization`;

export const ORGANIZATION = {
  "@type": ["NGO", "Organization"],
  "@id": ORG_ID,
  name: "Human Relief Mission Canada",
  legalName: "Human Relief Mission Canada",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/logo-white.svg` },
  description: "Independent Canadian non-profit supporting education, employment readiness, and newcomer settlement in Canada; not affiliated with any similarly named international organization.",
  foundingDate: "2024-04",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6745 Russell Road",
    addressLocality: "Carlsbad Springs",
    addressRegion: "ON",
    postalCode: "K0A 1K0",
    addressCountry: "CA",
  },
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+16134066745",
    email: "canadahrm@gmail.com",
    contactType: "general enquiries",
    availableLanguage: "English",
  }],
  sameAs: [
    "https://www.facebook.com/share/1Deka1hKMg/",
    "https://www.instagram.com/hrm.canada",
  ],
};

// ─── Builder functions ───────────────────────────────────────────────────────

/** Organization schema — inject once in the site layout */
export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
  };
}

/** WebSite schema with sitelinks SearchAction */
export function buildWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Human Relief Mission",
    description: "Education, employment readiness and newcomer settlement in Canada",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Generic WebPage schema */
export function buildWebPage(opts: {
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.imageUrl
      ? { image: { "@type": "ImageObject", url: opts.imageUrl } }
      : {}),
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": ORG_ID },
  };
}

/** BreadcrumbList schema */
export function buildBreadcrumb(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** ItemList of projects — used on the /projects listing page */
export function buildItemList(
  items: Array<{ name: string; url: string; description?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Projects",
    description:
      "Education, employment readiness and newcomer settlement programs in Canada.",
    url: `${BASE_URL}/projects`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

/** FAQPage schema */
export function buildFAQ(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** DonateAction schema */
export function buildDonateAction(opts: {
  name: string;
  url: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: opts.name,
    url: opts.url,
    ...(opts.description ? { description: opts.description } : {}),
    recipient: { "@id": ORG_ID },
  };
}

/** ContactPage schema */
export function buildContactPage() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE_URL}/contact#webpage`,
    url: `${BASE_URL}/contact`,
    name: "Contact Human Relief Mission",
    description:
      "Get in touch with Human Relief Mission — whether you have a donation query, want to volunteer, or need to reach our team.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": ORG_ID },
  };
}
