import { projectsConstant, SUCCESS, FAILURE, REQUEST } from "../constants";

const initialState = {
  projects: [],
  count: 0,
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
        count: action.payload.count,
        projects: action.payload.results,
        loading: false,
        error: null,
      };
    case FAILURE(projectsConstant.GET_PROJECTS):
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default projectsReducer;
