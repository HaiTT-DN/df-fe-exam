import { Project } from "@/types/Projects";
import { projectsConstant, REQUEST, SUCCESS, FAILURE } from "../constants";

export const getProjectRequest = () => ({
  type: REQUEST(projectsConstant.GET_PROJECTS),
});

export const getProjectSuccess = (projects: Project[]) => ({
  type: SUCCESS(projectsConstant.GET_PROJECTS),
  payload: projects,
});

export const getProjectFailure = (error) => ({
  type: FAILURE(projectsConstant.GET_PROJECTS),
  payload: error,
});
