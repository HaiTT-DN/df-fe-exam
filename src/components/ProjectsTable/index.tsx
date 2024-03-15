import { Project } from "@/types/Projects";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Pagination from "../Pagination";

interface ProjectsTableProps {
  projects: Project[];
  itemsPerPage: number;
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({
  projects,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {t("name")}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {t("domain")}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {t("last_accessed")}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project: Project) => (
              <tr
                key={project.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {project.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {project.project_name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {project.project_domain}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {project.last_accessed || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ProjectsTable;
