"use client";
import ProjectsTable from "@/components/ProjectsTable";
import { getProjectRequest } from "@/redux/actions/projectsActions";
import { RootState } from "@/redux/rootReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
  tokenIsExpired,
} from "@/services/cookieService";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "@/components/LanguageSwitch";

const ProjectsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projectsReducer
  );
  const [itemsPerPage] = useState(5);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProjectRequest());
  }, [dispatch]);

  useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      router.push("/authentication");
    } else {
      const isTokenExpired = tokenIsExpired();

      if (isTokenExpired) {
        console.log("expired");
      }
    }
  }, []);

  const onLogout = () => {
    removeAccessToken();
    removeRefreshToken();
    router.push("/");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="h-screen bg-white dark:bg-gray-800">
        <nav className="flex items-center justify-between bg-gray-200 dark:bg-gray-900 p-4">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            Digital Fortress FE Exam
          </h1>
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none"
              onClick={onLogout}
            >
              {t("logout")}
            </button>
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        </nav>
        <div className="p-4">
          <ProjectsTable projects={projects} itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
