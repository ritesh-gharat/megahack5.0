import React, { useState } from "react";
import i18n from "i18next";

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-center items-center py-4">
      <select
        className="border border-gray-300 dark:border-neutral-600 px-4 py-2 rounded-md bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-md"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="bn">Bengali</option>
        <option value="mr">Marathi</option>
      </select>
    </div>
  );
};

export default GoogleTranslate;