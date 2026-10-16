import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import JsonLd from "../components/JsonLd";
import { BASE_URL, buildContactPage, buildBreadcrumb } from "../lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Us | Human Relief Mission",
  description:
    "Contact Human Relief Mission Canada about educational, employment-readiness and newcomer settlement programs.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Human Relief Mission",
    description:
      "Contact Human Relief Mission Canada about educational, employment-readiness and newcomer settlement programs.",
    url: `${BASE_URL}/contact`,
    siteName: "Human Relief Mission",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Human Relief Mission",
    description: "Get in touch with our Canadian team.",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          buildContactPage(),
          buildBreadcrumb([
            { name: "Home", url: BASE_URL },
            { name: "Contact", url: `${BASE_URL}/contact` },
          ]),
        ]}
      />
      <ContactClient />
    </>
  );
}
