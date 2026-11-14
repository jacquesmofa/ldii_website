import type { ReactNode } from 'react';

const HERO_PHOTO =
  'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_1920,h_800,q_auto,f_auto/General_aiu2gv.jpg';

/** Navy hero with a real LDII photograph, shared by the Impact pages. */
export function ImpactHero({ title, children, photo = HERO_PHOTO }: { title: string; children?: ReactNode; photo?: string }) {
  return (
    <section className="relative py-24 bg-[#0A1E3D] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${photo})` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/90" aria-hidden="true"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
        {children && <div className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">{children}</div>}
      </div>
    </section>
  );
}

/** Closing call to action shared by the Impact pages. */
export function ImpactCta() {
  return (
    <section className="py-20 bg-[#0A1E3D]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be part of the next chapter</h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Partner with LDII, attend a coming engagement or support our work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/donate" className="bg-[#3CCB7F] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2EB06C] transition-colors whitespace-nowrap">Support Our Work</a>
          <a href="/partners" className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap">Partner With Us</a>
        </div>
      </div>
    </section>
  );
}
