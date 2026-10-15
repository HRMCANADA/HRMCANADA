import { sanityFetch } from "@/app/[locale]/lib/sanity/client";

export const revalidate = 60; // Revalidate dynamic llms.txt every 60 seconds

const BASE_URL = "https://humanreliefmission.com";

// GROQ Queries
const PROJECTS_QUERY = `
  *[_type == "project" && defined(slug.current)] | order(name asc) {
    name,
    "slug": slug.current,
    llmsSummary,
    cardSummary,
    tagline,
    "seoDescription": seo.metaDescription
  }
`;

const ECOSYSTEM_STAGES_QUERY = `
  *[_type == "ecosystemStage" && defined(slug.current)] | order(order asc) {
    title,
    "slug": slug.current,
    stageNumber,
    stageName,
    cardDescription,
    headerDescription,
    "seoDescription": seo.metaDescription
  }
`;

export async function GET() {
  const [projects, stages] = await Promise.all([
    sanityFetch<any[]>(PROJECTS_QUERY).catch(() => []),
    sanityFetch<any[]>(ECOSYSTEM_STAGES_QUERY).catch(() => []),
  ]);

  let markdown = `# Human Relief Mission\n\n`;
  markdown += `> Human Relief Mission Canada is an independent Canadian non-profit supporting educational, employment-readiness, and settlement programmes.\n\n`;

  // Core Static Pages
  markdown += `## Core Pages\n\n`;
  markdown += `- [Homepage](${BASE_URL}): Official website of Human Relief Mission Canada.\n`;
  markdown += `- [About Us](${BASE_URL}/about): Mission and programmes of Human Relief Mission Canada.\n`;
  markdown += `- [Our Projects](${BASE_URL}/projects): Explore educational, employment and settlement projects.\n`;
  markdown += `- [4 Phase Ecosystem](${BASE_URL}/ecosystem): This model lifting families out of poverty from receiving Zakat to paying Zakat.\n`;
  markdown += `- [Donate](${BASE_URL}/donate): Donate online securely with Gift Aid, Zakat, and Sadaqah options.\n`;
  markdown += `- [Contact Us](${BASE_URL}/contact): Contact the Human Relief Mission Canada team.\n`;
  markdown += `- [Annual Reports](${BASE_URL}/annual-reports): Financial transparency, audited accounts and annual impact overviews.\n`;

  // Dynamic Sanity Projects
  if (projects && projects.length > 0) {
    markdown += `## Active Projects\n\n`;
    projects.filter((p) => !/listening[ -]?circle/i.test(p.slug)).forEach((p) => {
      const summary = p.llmsSummary || p.seoDescription || p.tagline || p.cardSummary || "Community programme by Human Relief Mission Canada.";
      const cleanSummary = summary.replace(/\s+/g, " ").trim();
      markdown += `- [${p.name}](${BASE_URL}/projects/${p.slug}): ${cleanSummary}\n`;
    });
    markdown += `\n`;
  }

  // Dynamic Ecosystem Stages
  if (stages && stages.length > 0) {
    markdown += `## 4-Phase Ecosystem Stages\n\n`;
    stages.forEach((s) => {
      const name = s.stageName || s.title;
      const stageLabel = s.stageNumber ? `Stage ${s.stageNumber}: ${name}` : name;
      const desc = s.seoDescription || s.cardDescription || s.headerDescription || "Ecosystem stage for long-term community development.";
      const cleanDesc = desc.replace(/\s+/g, " ").trim();
      markdown += `- [${stageLabel}](${BASE_URL}/ecosystem/${s.slug}): ${cleanDesc}\n`;
    });
    markdown += `\n`;
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
