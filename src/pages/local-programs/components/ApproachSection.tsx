import { approachSteps, commitments } from '@/mocks/localProgramsData';

export default function ApproachSection() {
  return (
    <section id="our-approach" className="py-16 md:py-24 bg-white border-t border-gray-100 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight">
            Empowering communities through education, partnerships and practical action
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {approachSteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F5F8F3] rounded-xl p-6 border border-green-100/70"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <i className={`${step.icon} w-5 h-5 flex items-center justify-center text-green-700`}></i>
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] text-green-700/60">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A1E3D] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
              Our Commitment
            </span>
            <h2 className="text-3xl font-bold text-[#0A1E3D] leading-tight mb-4">
              Our commitment to local communities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              LDII believes strong communities are built when people have access to knowledge,
              opportunities, supportive relationships and a real voice in shaping their future.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commitments.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-5"
                >
                  <i className={`${item.icon} w-5 h-5 flex items-center justify-center text-green-700 flex-shrink-0 mt-0.5`}></i>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-gray-600 leading-relaxed border-l-2 border-green-600 pl-5">
              Starting in Ontario and growing across Canada, LDII will keep working alongside
              communities to build a stronger, safer and more resilient future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}