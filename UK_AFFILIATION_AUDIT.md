# UK affiliation removal audit — 16 October 2026

- Updated all source text references to the former `.com` domain to `https://humanreliefmission.ca` or `@humanreliefmission.ca` where applicable; review operational sender addresses before using them.
- All literal `en_GB` replaced by `en_CA`.
- Replaced UK charity metadata/JSON-LD identity, UK charity number, UK regulator, founding year and phone number.
- Removed About Us Zakat ecosystem section and Rapid Response value; revised Sustainability description.
- Home CTA uses requested neutral Canadian wording.
- Legacy `/ecosystem` and nested stage routes now call `notFound()`; avoid links to those routes. Review Sanity navigation separately.
- **Sanity CMS still needs a thorough audit.** Edit Social Club's immigration wording, About and all project body text, SEO titles/descriptions/canonical URLs, footer and navigation records. Those records are NOT modified by this ZIP.
- Legacy UK-related source modules and donation-receipt infrastructure may remain in the repository, including Gift Aid calculations; these must be reviewed/retired before enabling donations or email receipts. This package cannot certify that all references have been removed from every dormant module or historical record.
- Verify Vercel `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BASE_URL`, webhook and payment provider settings, domain ownership, and production redirects.
- Build and manually validate all pages, `<link rel=canonical>`, OG tags, JSON-LD, sitemap, and robots before deploying.
