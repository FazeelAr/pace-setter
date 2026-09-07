import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { getDestination, getLevelLabel, getProgramLabel, getPrograms } from '@/lib/study-data';

type DetailPageProps = {
  searchParams: Promise<{
    program?: string;
    level?: string;
    destination?: string;
  }>;
};

export default async function DestinationDetail({ searchParams }: DetailPageProps) {
  const params = await searchParams;
  const destination = getDestination(params.destination ?? '') ?? getDestination('united-kingdom')!;
  const programs = getPrograms(params.program ?? '', params.level ?? '');
  const levelLabel = getLevelLabel(params.level ?? '');
  const programLabel = getProgramLabel(params.program ?? '');

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.25),transparent_38%)]"></div>
        <div className="container-custom relative z-10 py-12 md:py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-bold mb-10 transition-colors">
            <ArrowLeft size={16} /> Back to study finder
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">{destination.flag}</div>
              <p className="text-accent-light text-xs font-black uppercase tracking-[0.2em] mb-3">Your study match</p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">Study in {destination.name}</h1>
              <p className="text-white/75 mt-4 max-w-2xl leading-relaxed">{destination.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-white/10 border border-white/15 px-4 py-2">{programLabel}</span>
              <span className="rounded-full bg-white/10 border border-white/15 px-4 py-2">{levelLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container-custom py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <section>
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-accent text-xs font-black uppercase tracking-[0.2em]">Degree options</p>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">Programs that fit your goals</h2>
              </div>
              <span className="text-sm text-slate-500 font-semibold">{programs.length} options</span>
            </div>

            <div className="grid gap-4">
              {programs.map((program) => (
                <article key={program.title} className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm hover:border-accent/40 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">{program.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{program.level} · Typical duration: {program.duration}</p>
                      </div>
                    </div>
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="bg-primary text-white rounded-2xl p-6 shadow-xl lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent text-primary flex items-center justify-center">
                <Building2 size={22} />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Institutes</p>
                <h2 className="text-xl font-bold">Where you can study</h2>
              </div>
            </div>
            <ul className="space-y-3">
              {destination.institutes.map((institute) => (
                <li key={institute} className="flex gap-3 items-start text-sm text-white/85">
                  <MapPin size={16} className="text-accent-light shrink-0 mt-0.5" />
                  <span>{institute}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-black text-white hover:bg-accent-light hover:text-primary transition-colors">
              Talk to an advisor <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
