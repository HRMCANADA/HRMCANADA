import { sanityFetch } from "../../lib/sanity/client";
import Navbar from "./Navbar";

const HEADER_NAV_QUERY = `
  *[_type == "headerNavigation"][0] {
    navItems[] {
      label,
      linkType,
      internalLink,
      externalLink,
      isExternal,
      subItems[] {
        label,
        linkType,
        internalLink,
        externalLink,
        isExternal
      }
    }
  }
`;

// Hide inactive projects and policy pages in both desktop and mobile menus.
// Sanity can still store these links; filter before rendering the Navbar.
function isHiddenNavLink(item: {
  label?: string;
  internalLink?: string;
  externalLink?: string;
}): boolean {
  const label = item.label ?? "";
  const href = item.internalLink ?? item.externalLink ?? "";
  return (
    /listening[\s-]*circle|polic(?:y|ies)|governance|ecosystem|zakat transformation/i.test(label) ||
    /\/(?:en\/|fr\/)?projects\/listening-circle(?:\/|$|[?#])/i.test(href) ||
    /\/(?:en\/|fr\/)?policies(?:\/|$|[?#])/i.test(href)
  );
}

export default async function NavbarWrapper() {
  const headerNav = await sanityFetch<any>(HEADER_NAV_QUERY);

  const filteredNavItems = (headerNav?.navItems ?? [])
    .filter((item: any) => !isHiddenNavLink(item))
    .map((item: any) => ({
      ...item,
      subItems: (item.subItems ?? []).filter(
        (subItem: any) => !isHiddenNavLink(subItem)
      ),
    }));

  return <Navbar navItems={filteredNavItems} />;
}
