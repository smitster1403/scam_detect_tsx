"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface OAuthButtonProps {
  strategy: "oauth_google" | "oauth_github" | "oauth_facebook";
  children: React.ReactNode;
  className?: string;
  mode?: "signin" | "signup";
}

export default function CustomOAuthButton({ 
  strategy, 
  children, 
  className = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mode = "signin" 
}: OAuthButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthSignIn = async () => {
    setIsLoading(true);
    
    try {
        console.log(`Mocking ${strategy} auth...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/dashboard");
    } catch (error) {
      console.error("OAuth error:", error);
      setIsLoading(false);
    }
  };

  const baseClassName = "w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type="button"
      onClick={handleOAuthSignIn}
      disabled={isLoading}
      className={`${baseClassName} ${className}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
}
