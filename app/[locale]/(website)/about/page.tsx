import type { Metadata } from "next";
import WhoWeAre from "../components/about/WhoWeAre";
import JsonLd from "../components/JsonLd";
import { BASE_URL, buildWebPage, buildBreadcrumb } from "../lib/jsonld";

export const metadata: Metadata = {
  title: "About Us | Human Relief Mission",
  description:
    "Learn about Human Relief Mission, a not-for-profit organization in Ontario, Canada supporting refugees, newcomers and families in need with dignity, compassion and care.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Human Relief Mission",
    description:
      "Learn about Human Relief Mission, a not-for-profit organization in Ontario, Canada supporting refugees, newcomers and families in need with dignity, compassion and care.",
    url: `${BASE_URL}/about`,
    siteName: "Human Relief Mission",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Human Relief Mission",
    description:
      "Discover who we are and how Human Relief Mission supports refugees, newcomers and families in need.",
  },
};

export default function About() {
  return (
    <div id="page-about" className="block mt-8 sm:mt-24">
      <JsonLd data={[
        buildWebPage({ title: "About Us | Human Relief Mission", description: "Learn about Human Relief Mission, a not-for-profit organization in Ontario, Canada supporting refugees, newcomers and families in need with dignity, compassion and care.", url: `${BASE_URL}/about` }),
        buildBreadcrumb([{ name: "Home", url: BASE_URL }, { name: "About", url: `${BASE_URL}/about` }]),
      ]} />
      <WhoWeAre />
    </div>
  );
}
