"use client";

import { useState } from "react";
import Link from "next/link";
import { scamTypes } from "@/lib/data";

export default function PublicReportScam() {
  const [formData, setFormData] = useState({
    scamType: "",
    contactMethod: "",
    description: "",
    email: "",
    location: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // This would be replaced with actual API logic
    console.log("Form submitted with data:", formData);
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        scamType: "",
        contactMethod: "",
        description: "",
        email: "",
        location: "",
        consent: false
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ScamDetect
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="/signup"
                className="ml-4 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
              >
                Sign Up
              </Link>
              <Link
                href="/dashboard"
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Report a Scam
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Help protect others by reporting a scam. No account required.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                  Thank you for your report!
                </h3>
                <div className="mt-2 text-green-700 dark:text-green-300">
                  <p>
                    Your report will help protect others from similar scams. Consider creating an account for more detailed reporting and to track scam activity.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/signup"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create an Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Scam Type */}
                <div>
                  <label htmlFor="scamType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Type of Scam *
                  </label>
                  <select
                    id="scamType"
                    name="scamType"
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-900 dark:text-white"
                    value={formData.scamType}
                    onChange={handleChange}
                  >
                    <option value="">Select a scam type</option>
                    {scamTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Method */}
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    How were you contacted? *
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-900 dark:text-white"
                    value={formData.contactMethod}
                    onChange={handleChange}
                  >
                    <option value="">Select contact method</option>
                    <option value="phone">Phone Call</option>
                    <option value="sms">SMS/Text</option>
                    <option value="email">Email</option>
                    <option value="website">Website</option>
                    <option value="social_media">Social Media</option>
                    <option value="mail">Physical Mail</option>
                    <option value="in_person">In Person</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Details about the scam *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    placeholder="Please describe what happened, including any websites, phone numbers, or other details that might help identify the scam."
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                {/* Email (optional) */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="We'll only contact you if we need more information"
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Location (City/State/Country)
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Helps us identify regional scams"
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-gray-700 dark:text-gray-300">
                      I consent to share this information *
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      By checking this box, you agree that this information can be used to help protect others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Report"
                )}
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Want more advanced reporting features?
          </p>
          <Link
            href="/signup"
            className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Create an account to access all features
          </Link>
        </div>
      </div>
    </div>
  );
}