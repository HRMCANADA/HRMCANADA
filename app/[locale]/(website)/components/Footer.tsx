import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { sanityFetch } from "../../lib/sanity/client";

// ── GROQ Query ─────────────────────────────────────────────────────────────────────

const FOOTER_NAV_QUERY = `
  *[_type == "footerNavigation"][0] {
    footerColumns[] {
      columnTitle,
      links[] {
        label,
        linkType,
        internalLink,
        externalLink,
        isExternal
      }
    }
  }
`;

// ── Types ─────────────────────────────────────────────────────────────────────

interface FooterLink {
  label: string;
  linkType: "internal" | "external";
  internalLink?: string;
  externalLink?: string;
  isExternal?: boolean;
}

interface FooterColumn {
  columnTitle: string;
  links?: FooterLink[];
}

interface FooterProps { }

function resolveHref(link: FooterLink): string {
  return link.linkType === "external"
    ? (link.externalLink ?? "#")
    : (link.internalLink ?? "#");
}

export default async function Footer() {
  const footerNav = await sanityFetch<any>(FOOTER_NAV_QUERY);
  const footerColumns: FooterColumn[] = footerNav?.footerColumns ?? [];
  return (
    <footer className="bg-purple text-brand-white/70 py-16 px-4 md:px-8">
      <div className="max-w-285 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-12 border-b border-brand-white/10">
        <div>
          <div>
            <Link href="/" >
              <Image src="/logo-white.svg" alt="Human Relief Mission Canada logo" width={150} height={158} className="w-28 h-auto" />
            </Link>
            <div className="text-[0.875rem] leading-[1.7] my-6">
              Human Relief Mission Canada supports education, employment readiness, and newcomer settlement in Canadian communities.
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/share/1Deka1hKMg/" aria-label="Human Relief Mission Canada on Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 p-3 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-white hover:bg-purple-light"><FaFacebookF size={18} /></Link>
            <Link href="https://www.instagram.com/hrm.canada?exln=MWdiOWlqbDJ2YnZ3ZQ==" aria-label="Human Relief Mission Canada on Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 p-3 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-white hover:bg-purple-light"><BiLogoInstagramAlt size={18} /></Link>
          </div>
        </div>
        {footerColumns.map((col, colIdx) => (
          <div key={colIdx}>
            <div className="text-brand-white font-bold text-[0.875rem] tracking-widest uppercase mb-6">
              {col.columnTitle}
            </div>
            {col.links && col.links.length > 0 && (
              <ul className="list-none flex flex-col gap-2.5">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={resolveHref(link)}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-[0.875rem] text-brand-white/60 no-underline cursor-pointer transition-colors hover:text-brand-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <p className="max-w-285 mx-auto pt-6 text-sm text-brand-white/90">Human Relief Mission Canada is an independent Canadian non-profit and is not a branch, subsidiary, or partner of any international organization by the same name.</p>
      <div className="max-w-285 mx-auto pt-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-[0.8rem] text-brand-white">Copyright &copy; Human Relief Mission 2026. All Rights Reserved</p>
          {/* CHARITY STATUS PENDING — will be uncommented when registered charity status is confirmed */}
          {/* <p className="text-[0.8rem] text-brand-white opacity-80">Charity No. Pending</p> */}
          <div className="max-w-285 mx-auto pt-2 text-[0.6rem] text-brand-white/40 italic">
            Developed by {""}
            <Link href="https://buildingblocks.digital" className="hover:underline cursor-pointer">Building Blocks</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

