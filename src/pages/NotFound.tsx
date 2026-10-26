import { Link } from 'react-router-dom';

const quickLinks = [
  { title: 'About Us', description: 'Who LDII is and how we work', href: '/about' },
  { title: 'Programs', description: 'Youth, capacity training and the mining exchange', href: '/programs' },
  { title: 'Partners', description: 'The institutions and industry we work with', href: '/partners' },
  { title: 'Contact', description: 'Toronto office and official contacts', href: '/contact' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 md:px-6 py-24">
        <div className="max-w-3xl w-full">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#00D9FF] bg-[#0A1E3D] px-4 py-2 rounded-full mb-8">
              Page not found
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              We could not find that page
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              The link may be out of date, or the page may have moved. Everything below is still
              live, or get in touch and we will point you in the right direction.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[#0A1E3D] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#132a52] transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                Back to home
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold text-sm hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Browse programs
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-start justify-between gap-4 bg-gray-50 border border-gray-100 rounded-lg p-5 hover:border-gray-300 transition-colors cursor-pointer"
              >
                <span>
                  <span className="block text-sm font-semibold text-gray-900 mb-1">
                    {link.title}
                  </span>
                  <span className="block text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </span>
                </span>
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center text-gray-400 group-hover:text-gray-700 transition-colors mt-1"></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}