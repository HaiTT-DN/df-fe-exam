export interface Project {
  id: number;
  project_name: string;
  project_domain: string;
  last_accessed: string | null;
  license_use: {
    license_type: string;
    libraries: string[];
  }[];
}

export interface ProjectsTableProps {
  projects: Project[];
}
