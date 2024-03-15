"use client";
import ProjectsTable from "@/components/ProjectsTable";
import { getProjectRequest } from "@/redux/actions/projectsActions";
import { RootState } from "@/redux/rootReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { removeAuthToken, removeRefreshToken } from "@/services/cookieService";
import { ThemeProvider } from "@/app/theme-provider";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const ProjectsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projectsReducer
  );
  const [itemsPerPage] = useState(5);
  const router = useRouter();

  useEffect(() => {
    dispatch(getProjectRequest());
  }, [dispatch]);

  const onLogout = () => {
    removeAuthToken();
    removeRefreshToken();
    router.push("/");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="h-screen bg-white dark:bg-gray-800">
        <nav className="flex items-center justify-between bg-gray-200 dark:bg-gray-900 p-4">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            Header
          </h1>
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none"
              onClick={onLogout}
            >
              Logout
            </button>
            <ThemeSwitch />
          </div>
        </nav>
        <div className="p-4">
          <ProjectsTable projects={projects} itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProjectsPage;
