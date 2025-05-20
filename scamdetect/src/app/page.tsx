import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center mb-16">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ScamDetect
          </Link>
          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
        
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
            Scam Detection Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Report scams, analyze threats, and share intelligence in real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/public/report"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Report a Scam
            </Link>
          </div>
        </header>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Threat Statistics Section */}
        <section className="max-w-6xl mx-auto mb-20 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Threat Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Join the Fight Against Scams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Start using our platform today to protect yourself and others from
            online threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/public/report"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-block"
            >
              Report a Scam
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

// Add type definition for SVG component props
type IconProps = React.SVGProps<SVGSVGElement>;

// Placeholder for feature icons with proper type annotations
const IconShield = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const IconBell = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const IconDatabase = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const IconUpload = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const IconSearch = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const IconOffice = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

// Sample data
const features = [
  {
    title: "Report Scams",
    description:
      "Submit details about scam attempts, including evidence to alert others.",
    icon: IconUpload,
  },
  {
    title: "Report Malware",
    description:
      "Upload infected files for analysis and help build our threat database.",
    icon: IconShield,
  },
  {
    title: "Threat Alerts",
    description: "Receive real-time notifications about new threats in your area.",
    icon: IconBell,
  },
  {
    title: "Threat Database",
    description:
      "Search our comprehensive database of known scams and malware.",
    icon: IconDatabase,
  },
  {
    title: "Smart Search",
    description:
      "Filter threats by type, industry targeted, and geographic location.",
    icon: IconSearch,
  },
  {
    title: "Business Portal",
    description:
      "Access premium alerts and industry-specific threat intelligence.",
    icon: IconOffice,
  },
];

const stats = [
  { value: "50K+", label: "Scams Reported" },
  { value: "10K+", label: "Malware Samples" },
  { value: "24/7", label: "Threat Monitoring" },
  { value: "100+", label: "Countries Covered" },
];
