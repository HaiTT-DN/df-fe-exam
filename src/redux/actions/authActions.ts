import { authConstants, REQUEST, SUCCESS, FAILURE } from "../constants";

export const loginRequest = (credentials) => ({
  type: REQUEST(authConstants.LOGIN),
  payload: credentials,
});

export const loginSuccess = (token) => ({
  type: SUCCESS(authConstants.LOGIN),
  payload: token,
});

export const loginFailure = (error) => ({
  type: FAILURE(authConstants.LOGIN),
  payload: error,
});

export const refreshTokenRequest = () => ({
  type: REQUEST(authConstants.REFRESH_TOKEN),
});

export const refreshTokenSuccess = () => ({
  type: SUCCESS(authConstants.REFRESH_TOKEN),
});

export const refreshTokenFailure = (error) => ({
  type: FAILURE(authConstants.REFRESH_TOKEN),
  payload: error,
});
