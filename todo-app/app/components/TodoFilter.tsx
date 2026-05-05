"use client";

import { FilterType } from "../types/todo";
import { T } from "../i18n/translations";

interface Props {
  current: FilterType;
  onChange: (filter: FilterType) => void;
  t: T;
}

export default function TodoFilter({ current, onChange, t }: Props) {
  const tabs: { label: string; value: FilterType }[] = [
    { label: t.tabAll, value: "all" },
    { label: t.tabActive, value: "active" },
    { label: t.tabCompleted, value: "completed" },
  ];

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
      {tabs.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-4 py-2 text-sm font-medium -mb-px transition-colors ${
            current === value
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
