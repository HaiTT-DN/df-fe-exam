import Cookies from "universal-cookie";

const cookies = new Cookies();

const setAccessToken = (token) => {
  cookies.set("authToken", token, { path: "/" });
};

const getAccessToken = () => {
  return cookies.get("authToken");
};

const removeAccessToken = () => {
  cookies.remove("authToken", { path: "/" });
};

const setRefreshToken = (token) => {
  cookies.set("refreshToken", token, { path: "/" });
};

const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

const removeRefreshToken = () => {
  cookies.remove("refreshToken", { path: "/" });
};

const tokenIsExpired = () => {
  const accessToken = cookies.get("accessToken");
  if (!accessToken) {
    return true;
  }
  try {
    const decodedToken = parseJwt(accessToken);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

const parseJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  tokenIsExpired,
};
