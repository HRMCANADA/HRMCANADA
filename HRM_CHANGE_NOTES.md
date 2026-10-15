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
