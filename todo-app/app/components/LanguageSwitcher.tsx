"use client";

import { Locale, localeLabels } from "../i18n/translations";

const LOCALES: Locale[] = ["ja", "en", "fr", "tr"];

interface Props {
  current: Locale;
  onChange: (locale: Locale) => void;
}

export default function LanguageSwitcher({ current, onChange }: Props) {
  return (
    <div className="flex gap-1.5 justify-center mb-5">
      {LOCALES.map((locale) => (
        <button
          key={locale}
          onClick={() => onChange(locale)}
          className={`px-3 py-1 text-xs rounded-full transition-colors ${
            current === locale
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
