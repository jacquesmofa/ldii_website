import { confirmedPartners } from '../../mocks/partnersData';
import copy from '../../content/layout/partner-cards.json';
// Text, images and links: src/content/layout/partner-cards.json (editable in the website editors).

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
          className="group flex items-start gap-5 bg-white p-6 border border-gray-200 border-l-[3px] border-l-tech-teal-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="flex-shrink-0 w-24 h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
            {partner.logo ? (
              <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain" loading="lazy" />
            ) : (
              <i className={`${partner.icon} text-4xl text-[#0A1E3D]`} aria-hidden="true"></i>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ldii-navy group-hover:text-tech-teal-800">{partner.name} <i className="ri-external-link-line text-sm text-gray-400 align-middle" aria-hidden="true" /><span className="sr-only">{copy.main.label}</span></h3>
            <p className="text-sm font-medium text-tech-teal-800 mb-2">{partner.role}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{partner.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
