import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const LanguageSwitcher = () => {
  const languages = ["En", "Es"];
  const [language, setLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-2xl border-2 border-[#353535] shadow-sm p-2 bg-transparent text-sm font-medium text-[#DCDCDC] gap-1 focus:outline-none focus:ring-1 focus:ring-gray-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {language}
          <ChevronDownIcon className='w-4 h-4'/>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute w-full right-0 mt-2 w-28 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {languages.map((lang, id) => 
              <button
                key={id}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left"
                role="menuitem"
                onClick={() => selectLanguage(lang)}
              >
                {lang}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
