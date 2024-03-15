"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const toAuthentication = () => {
    router.push("/authentication");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 dark:bg-gray-900 bg-white">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center h-48 w-full">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white uppercase mb-4">
            Welcome to my App
          </h1>
          <button
            onClick={() => toAuthentication()}
            className="px-6 py-3 bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
