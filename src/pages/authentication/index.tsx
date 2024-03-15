import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { loginRequest } from "@/redux/actions/authActions";
import { RootState } from "@/redux/rootReducer";
import { getAccessToken } from "@/services/cookieService";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import LanguageSwitch from "@/components/LanguageSwitch";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { error } = useSelector((state: RootState) => state.authReducer);
  const authToken = getAccessToken();
  const { t } = useTranslation();

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
    <>
      <div className="flex items-center justify-end dark:bg-gray-900">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
      <div className="flex min-h-screen items-center justify-center dark:bg-gray-900 bg-white">
        <div className="max-w-md w-full px-8 py-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
            {t("auth")}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-white mb-2"
              >
                {t("email")}
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-white mb-2"
              >
                {t("password")}
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none"
            >
              {t("login")}
            </button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
