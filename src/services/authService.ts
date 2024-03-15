import axios from "axios";
import { setAccessToken, setRefreshToken } from "./cookieService";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/api/login", { email, password });
    const { token, refreshToken } = response.data;
    // Set authentication tokens in cookies
    setAccessToken(token);
    setRefreshToken(refreshToken);
    return { token, refreshToken };
  } catch (error) {
    throw new Error("Failed to authenticate");
  }
};
