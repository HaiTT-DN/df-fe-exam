import { projectsConstant, SUCCESS, FAILURE, REQUEST } from "../constants";

const initialState = {
  projects: [],
  error: null,
  loading: false,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(projectsConstant.GET_PROJECTS):
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS(projectsConstant.GET_PROJECTS):
      return {
        ...state,
        projects: action.payload,
        error: null,
      };
    case FAILURE(projectsConstant.GET_PROJECTS):
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
