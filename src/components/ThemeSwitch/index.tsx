"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex p-4 justify-end items-center dark:bg-gray-900">
      <p className="mr-2">{t("theme_select")}</p>
      <button
        className={`w-fit p-2 bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? t("dark") : t("light")}
      </button>
    </div>
  );
};
