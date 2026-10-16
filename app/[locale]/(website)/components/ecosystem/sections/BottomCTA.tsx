import Link from "next/link";
export default function BottomCTA({ stages: _stages }: { stages?: {slug: string; stageName?: string; title: string}[] }) {
  return <section className="bg-purple-dark py-16 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Change a Life?</h2>
      <p className="text-brand-white/75 text-lg mb-8 leading-relaxed">
        Every donation helps a newcomer access education, employment support, and settlement resources in Canada.
      </p>
      <Link href="/projects" className="inline-flex bg-yellow px-6 py-3 rounded-sm font-bold text-brand-black">Explore Our Programs</Link>
    </div>
  </section>;
}
