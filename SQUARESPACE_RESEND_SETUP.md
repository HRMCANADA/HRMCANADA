# Configure contact email using Squarespace DNS and Resend

1. In Resend, open Domains and add `humanreliefmission.ca`. Copy the specific DNS records Resend shows for verification and sending.
2. In Squarespace, open Domains, select `humanreliefmission.ca`, and open DNS Settings / DNS Records. If Squarespace is *not* your active DNS host, add the records at the actual DNS provider instead.
3. Add each DNS record exactly as Resend specifies: record type, host/name, value/target, TTL (and priority, if applicable). Do not overwrite existing Gmail/Google Workspace MX records just to enable sending.
4. Return to Resend and verify the domain. Wait for verified status before sending mail from `contact@humanreliefmission.ca`.
5. In Vercel project Settings → Environment Variables, set:
   - `NEXT_RESEND_API_KEY`: Resend API key (secret)
   - `CONTACT_TO_EMAIL`: `canadahrm@gmail.com`
   - `CONTACT_FROM_EMAIL`: `contact@humanreliefmission.ca`
   Select Preview and Production (or the intended environment). Redeploy after saving.
6. Submit a test contact form, confirm success and actual delivery to Gmail and sender acknowledgment; check spam if necessary.

The sender address can be used through Resend without a separate inbox if the domain is verified. Do not expose your API key in GitHub or share it in chat.

**Before publishing:** Review outdated Sanity CMS content and project detail pages; the code filters do not delete CMS records.
