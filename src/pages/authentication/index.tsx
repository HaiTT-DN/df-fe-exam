import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loginRequest } from "@/redux/actions/authActions";
import { RootState } from "@/redux/rootReducer";
import { getAccessToken } from "@/services/cookieService";
import { ThemeProvider } from "@/app/theme-provider";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { error } = useSelector((state: RootState) => state.authReducer);
  const authToken = getAccessToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (typeof window !== "undefined" && authToken) {
      router.push("/projects");
    }
  }, [authToken]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeSwitch />
      <div className="flex min-h-screen items-center justify-center dark:bg-gray-900 bg-white">
        <div className="max-w-md w-full px-8 py-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none"
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
