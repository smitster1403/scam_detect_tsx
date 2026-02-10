"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function SSOCallback() {
  const router = useRouter();

  useEffect(() => {
    // Mock callback handling
    const timer = setTimeout(() => {
        router.push('/dashboard');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-gray-900 dark:text-white">
              Completing sign in...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
