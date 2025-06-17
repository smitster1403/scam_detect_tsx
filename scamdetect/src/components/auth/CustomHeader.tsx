"use client";

import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";

export default function CustomHeader() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <Link 
        href="/" 
        className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        ScamDetect
      </Link>
      
      <div className="flex items-center gap-4">
        {!isSignedIn ? (
          <>
            <Link href="/login">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
            </span>
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Dashboard
                </button>
              </Link>
              <Link href="/profile">
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Profile
                </button>
              </Link>
              <button 
                onClick={handleSignOut}
                className="px-3 py-1 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
