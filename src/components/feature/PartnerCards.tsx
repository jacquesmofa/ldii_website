import { confirmedPartners } from '../../mocks/partnersData';

/** Grid of LDII's confirmed partners: real logo when we have one, otherwise an icon. */
export default function PartnerCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {confirmedPartners.map((partner) => (
        <a
          key={partner.name}
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex-shrink-0 w-24 h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
            {partner.logo ? (
              <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain" loading="lazy" />
            ) : (
              <i className={`${partner.icon} text-4xl text-[#0A1E3D]`} aria-hidden="true"></i>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700">{partner.name}</h3>
            <p className="text-sm font-medium text-teal-700 mb-2">{partner.role}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{partner.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
