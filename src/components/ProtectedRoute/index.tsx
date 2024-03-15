import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAccessToken } from "@/services/cookieService";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const authToken = getAccessToken();

  useEffect(() => {
    if (!authToken) {
      router.push("/authentication");
    }
  }, [authToken, router]);

  return authToken ? children : null;
};

export default ProtectedRoute;
