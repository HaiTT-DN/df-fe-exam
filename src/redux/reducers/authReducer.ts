import { authConstants, SUCCESS, FAILURE } from "../constants";

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS(authConstants.LOGIN):
    case SUCCESS(authConstants.REFRESH_TOKEN):
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case FAILURE(authConstants.LOGIN):
    case FAILURE(authConstants.REFRESH_TOKEN):
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
