import { useState } from 'react';
import LanguageSwitcher from '../base/LanguageSwitcher';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: 'About Us',
      href: '/about',
      dropdown: [
        { title: 'Who We Are', href: '/about/who-we-are' },
        { title: 'Our Work', href: '/about/our-work' },
        { title: 'Past Projects', href: '/about/past-projects' },
        { title: 'Upcoming Projects', href: '/about/upcoming-projects' }
      ]
    },
    {
      title: 'What We Do',
      href: '/what-we-do',
      dropdown: [
        { title: 'Technology Transfer, AI Governance & Research', href: '/what-we-do/technology-ai-research' },
        { title: 'Climate Action & Mitigation', href: '/what-we-do/climate-action' },
        { title: 'Health & Resilience', href: '/what-we-do/global-health' },
        { title: 'Communication & Digital Inclusion', href: '/what-we-do/digital-inclusion' },
        { title: 'Sustainable Food Systems', href: '/what-we-do/sustainable-food' },
        { title: 'Poverty Eradication & Inclusive Growth', href: '/what-we-do/poverty-eradication' }
      ]
    },
    {
      title: 'Local Programs',
      href: '/local-programs',
      dropdown: null
    },
    {
      title: 'Impact',
      href: '/impact',
      dropdown: [
        { title: 'Achievements', href: '/impact/achievements' },
        { title: 'Success Stories', href: '/impact/success-stories' },
        { title: 'Annual Reports', href: '/impact/annual-reports' },
        { title: 'Metrics', href: '/impact/metrics' }
      ]
    },
    {
      title: 'Events & News',
      href: '/events',
      dropdown: [
        { title: 'Upcoming Events', href: '/events/upcoming' },
        { title: 'Past Events & Resources', href: '/events/past' },
        { title: 'Latest News', href: '/events/news' },
        { title: 'Press Releases', href: '/events/press-releases' },
        { title: 'Gallery', href: '/events/gallery' }
      ]
    },
    {
      title: 'Partners & Support',
      href: '/partners',
      dropdown: [
        { title: 'Government Partners', href: '/partners#government-partners' },
        { title: 'Private Sector', href: '/partners#private-sector' },
        { title: 'NGO Partners', href: '/partners#ngo-partners' },
        { title: 'Academic Institutions', href: '/partners#academic-institutions' },
        { title: 'Donate', href: '/donate' },
        { title: 'Volunteer', href: '/partners#volunteer' },
        { title: 'Corporate Partnership', href: '/partners#corporate-partnership' }
      ]
    },
    {
      title: 'Contact',
      href: '/contact',
      dropdown: [
        { title: 'Get in Touch', href: '/contact/get-in-touch' },
        { title: 'Our Locations', href: '/contact/our-locations' },
        { title: 'Media Inquiries', href: '/contact/media-inquiries' }
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/#hero" className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/0d2f293969006eba1eb1567c17a42468.png"
                  alt="LDII Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300" style={{ fontFamily: '"Roboto", sans-serif', letterSpacing: '0.05em' }}>LDII</div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <div className="flex items-center space-x-4 2xl:space-x-6">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-white hover:bg-green-600 font-medium transition-all duration-300 cursor-pointer flex items-center space-x-1 px-3 2xl:px-4 py-2 rounded-lg transform hover:scale-105 text-sm 2xl:text-base"
                  >
                    <span className="whitespace-nowrap">{item.title}</span>
                    {item.dropdown && (
                      <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:rotate-180"></i>
                    )}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-300 transform ${
                      activeDropdown === item.title 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 translate-y-2 invisible'
                    }`}>
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-green-600 transition-all duration-200 cursor-pointer transform hover:translate-x-1"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right Side - Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center text-gray-700`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 overflow-y-auto max-h-[70vh]">
            {navigationItems.map((item, index) => (
              <div key={index} className="space-y-1">
                <a
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-white hover:bg-green-600 rounded-lg transition-colors cursor-pointer font-medium"
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === item.title ? null : item.title);
                    }
                  }}
                >
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <i className={`ri-arrow-down-s-line w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`}></i>
                  )}
                </a>
                
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === item.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-white hover:bg-green-600 rounded-lg transition-colors cursor-pointer"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
