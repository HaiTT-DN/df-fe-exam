import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import projectsReducer from "./reducers/projectsReducer";

const rootReducers = combineReducers({ authReducer, projectsReducer });

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
