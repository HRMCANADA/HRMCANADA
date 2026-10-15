import { sanityFetch } from "@/app/[locale]/lib/sanity/client";
import YellowCTA from '../YellowCTA';


// Sanity Schema Query
const ABOUT_QUERY = `
  *[_type == "aboutUs" ][0] {
    whoWeAre {
      title,
      body,
      images[] {
        image {
          asset
        },
        altText
      }
    }
  }
`;

export default async function WhoWeAre() {
  const data = await sanityFetch<any>(ABOUT_QUERY);
  const whoWeAreData = data?.whoWeAre;

  return (
    <section className="px-6 md:px-12 lg:px-4 py-12 md:py-12 lg:py-4">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 items-center">
          <div>
            <div className="inline-block bg-purple text-white font-bold text-[0.75rem] tracking-widest uppercase px-4 py-1.5 mb-4 rounded-sm">Our Story</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-6 leading-tight">
              {whoWeAreData?.title || 'Who We Are'}
            </h2>
            <div className="text-[1.05rem] text-brand-black leading-[1.8] mb-6 space-y-4">
              <p>Human Relief Mission Canada was incorporated in Canada in April 2024. Our activities focus on educational programs, employment readiness, and newcomer settlement support.</p>
              <p>Our work helps participants access learning opportunities, strengthen job-search skills, and navigate settlement resources in Canada.</p>
              <p className="font-semibold">Human Relief Mission Canada is an independent Canadian non-profit and is not a branch, subsidiary, or partner of any international organization by the same name.</p>
            </div>
            <YellowCTA
              text='Support our Mission'
              href='/projects'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
