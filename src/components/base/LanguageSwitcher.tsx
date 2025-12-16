import { useState } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#00D9FF] transition-colors cursor-pointer"
      >
        <i className="ri-global-line w-4 h-4 flex items-center justify-center"></i>
        <span className="text-sm font-medium">{selectedLanguage.code.toUpperCase()}</span>
        <i className={`ri-arrow-down-s-line w-4 h-4 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium text-gray-900">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
