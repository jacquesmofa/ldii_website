import { localProgrammes } from '@/mocks/localProgramsData';

export default function ProgrammeIndex() {
  const scrollToProgramme = (id: string) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {localProgrammes.map((programme) => (
        <button
          key={programme.id}
          type="button"
          onClick={() => scrollToProgramme(programme.id)}
          className="group text-left bg-white border border-gray-100 rounded-xl p-6 hover:border-green-300 transition-colors duration-300 cursor-pointer flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="w-10 h-10 rounded-lg bg-[#F3F7F1] flex items-center justify-center">
              <i className={`${programme.icon} w-5 h-5 flex items-center justify-center text-green-700`}></i>
            </span>
            <span className="text-xs font-semibold tracking-[0.25em] text-gray-400">
              {programme.number}
            </span>
          </div>

          <h3 className="text-base font-bold text-[#0A1E3D] leading-snug mb-3 group-hover:text-green-800 transition-colors">
            {programme.title}
          </h3>

          <p className="text-[13px] text-gray-600 leading-relaxed flex-1">
            {programme.tagline}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-green-700">
            <span>View programme</span>
            <i className="ri-arrow-right-line w-3.5 h-3.5 flex items-center justify-center"></i>
          </span>
        </button>
      ))}
    </div>
  );
}