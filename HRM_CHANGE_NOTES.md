# HRM Canada website changes — 15 October 2026

Changes prepared in source code; **not deployed**.

- About Us: fixed Canadian incorporation wording, independence statement, education/employment/settlement description. Removed the entire Who We Are slideshow (including the food-hamper image).
- Footer: independence statement, Facebook and Instagram only, Canadian program description, removed donation policy image.
- Impact: pound → dollar on homepage and About; suppress legacy aid/medical stats, which must be replaced by verified Canadian program statistics in Sanity.
- Projects: removed emergency wording, filtered out Listening Circle and non-program listings from index/homepage. Additional Sanity content and individual project pages require review.
- Removed the About page's UK-specific donation policy section, not merely its badge, since it inaccurately references UK regulation and Gift Aid.
- Updated key homepage/About/Projects metadata that falsely stated a UK affiliation.

## REQUIRED BEFORE PUBLICATION
1. Review Sanity Studio entries for About Us, Hero Slide, footer navigation, project entries (including Listening Circle), project details, and impact; correct/archive old aid, healthcare, legal and emergency content. Source edits cannot guarantee those records are changed.
2. Inspect project detail routes, menus, links, and SEO for other legacy statements. Some pages may remain accessible directly even when excluded from lists.
3. Confirm the authorized organization description and independently validate any program claims; remove unsupported impact figures.
4. Run npm install and npm run build locally, then preview branch deployment in Vercel, and check desktop/mobile before merging.
5. ZIP excludes uploaded .env and .env.local secrets. If these were ever committed to GitHub, rotate credentials and stop tracking those files.

## Follow-up revision — footer and Listening Circle
- Footer: replaced the `hhtw.svg` slogan illustration with the HRM Canada white logo (`logo-white.svg`).
- Listening Circle: excluded it from the XML sitemap in addition to the existing listings filter and detail-route 404 guard.
- The Sanity document still needs to be unpublished/archived manually in Sanity Studio; source edits do not delete CMS records.

## Final contact-form update
- Uses verified Resend sender contact@humanreliefmission.ca (after domain DNS verification).
- Sends notifications to canadahrm@gmail.com.
- Removes UK-specific contact email content and escapes user-provided HTML in templates.
- In Vercel set NEXT_RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL for the desired environments and redeploy.
- Configure Squarespace-managed DNS with the precise records displayed in Resend Domains; do not invent DNS record values.
- Website builds and email delivery have not been tested in this environment.

## 15 October 2026 — Policies temporarily unavailable
- `/en/policies` and `/en/policies/*` now render a Next.js 404, without deleting Sanity policy records.
- Removed policy/governance links and groups from the Sanity-driven footer.
- Removed advertised policy links from `/llms.txt`; sitemap did not include Policies.
- Original policy page components retained under `docs/policy-pages-backup/` for future restoration.
- Do not interpret temporary removal as waiver of legal privacy/terms disclosure duties. Review what legally required notices must remain available before production release.

- Header navigation now filters Listening Circle, Policies and Governance from the Sanity-provided desktop and mobile menus.

## Contact details and newsletter (15 October 2026)
- Contact Us displayed email corrected to canadahrm@gmail.com. Address, phone and office hours left unchanged as requested.
- Newsletter description revised to reflect Canadian education, employment-readiness and settlement programs.
- Mailchimp integration no longer references a hard-coded legacy audience or server. Requires `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX`, and `MAILCHIMP_AUDIENCE_ID` in Vercel for Preview and Production. Without them the form displays a friendly unavailable message.
- Contact form continues to require separate Resend verification and environment variables.
- Verify that the Mailchimp audience belongs to HRM Canada and implement appropriate marketing consent and privacy disclosures before collecting subscriptions.

- Newsletter removed from homepage, including subscription form and Mailchimp actions. Removed donation checkout newsletter opt-in. No Mailchimp account or keys required.

- Standardized remaining visible website and email reply-to references from info@humanreliefmission.com to canadahrm@gmail.com.
