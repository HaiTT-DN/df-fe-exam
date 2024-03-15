// components/ProjectsPage.tsx
import ProjectsTable from "@/components/ProjectsTable";
import { getProjectRequest } from "@/redux/actions/projectsActions";
import { RootState } from "@/redux/rootReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projectsReducer
  );
  const [itemsPerPage] = useState(5); // Set number of items per page

  useEffect(() => {
    dispatch(getProjectRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ProjectsTable projects={projects} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default ProjectsPage;
