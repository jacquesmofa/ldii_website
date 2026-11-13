import PartnerCards from '../../../components/feature/PartnerCards';

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The organisations and venues behind our conferences, delegations and exchanges.
          </p>
        </div>
        <PartnerCards />
        <div className="text-center mt-10">
          <a href="/partners" className="inline-flex items-center font-semibold text-[#0A1E3D] hover:text-teal-700">
            Become a partner <i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
