import type { LocalProgramme } from '@/mocks/localProgramsData';
import PhotoStrip from './PhotoStrip';

interface ProgrammeBlockProps {
  programme: LocalProgramme;
  background: 'white' | 'tint';
}

export default function ProgrammeBlock({ programme, background }: ProgrammeBlockProps) {
  return (
    <section
      id={programme.id}
      className={`py-16 md:py-24 scroll-mt-32 ${background === 'tint' ? 'bg-[#F5F8F3]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold tracking-[0.3em] text-green-700">
                {programme.number}
              </span>
              <span className="h-px flex-1 bg-green-200"></span>
              <span className="w-9 h-9 rounded-full bg-white border border-green-100 flex items-center justify-center">
                <i className={`${programme.icon} w-4 h-4 flex items-center justify-center text-green-700`}></i>
              </span>
            </div>

            <h2 className="text-2xl md:text-[30px] font-bold text-[#0A1E3D] leading-tight">
              {programme.title}
            </h2>

            <p className="mt-4 text-[15px] italic text-green-800 leading-relaxed">
              {programme.tagline}
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              {programme.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-4">
              Key areas of focus
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {programme.focus.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-2.5 bg-white border border-gray-100 rounded-lg p-4"
                >
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5"></i>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PhotoStrip photos={programme.photos} programmeTitle={programme.title} />
      </div>
    </section>
  );
}