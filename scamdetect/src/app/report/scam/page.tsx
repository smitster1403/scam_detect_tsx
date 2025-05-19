"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { scamTypes } from "@/lib/data";

export default function ReportScam() {
  const [formData, setFormData] = useState({
    scamType: "",
    contactMethod: "",
    scammerPhone: "",
    scammerEmail: "",
    scammerWebsite: "",
    otherContactInfo: "",
    description: "",
    moneyLost: false,
    moneyAmount: "",
    personalInfoCompromised: false,
    personalInfoDetails: "",
    dateOccurred: "",
    location: "",
    anonymous: false,
  });

  const [files, setFiles] = useState<File[]>([]);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(prev => [...prev, ...fileArray]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // This would be replaced with actual API logic
    console.log("Form submitted with data:", formData);
    console.log("Files:", files);
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        scamType: "",
        contactMethod: "",
        scammerPhone: "",
        scammerEmail: "",
        scammerWebsite: "",
        otherContactInfo: "",
        description: "",
        moneyLost: false,
        moneyAmount: "",
        personalInfoCompromised: false,
        personalInfoDetails: "",
        dateOccurred: "",
        location: "",
        anonymous: false,
      });
      setFiles([]);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Report a Scam
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Help others by reporting a scam you&apos;ve encountered. Your information will help protect others.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                  Report submitted successfully
                </h3>
                <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                  <p>
                    Thank you for your submission. Your report will help protect others from similar scams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Scam Type */}
              <div className="col-span-2">
                <label htmlFor="scamType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Scam Type *
                </label>
                <select
                  id="scamType"
                  name="scamType"
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
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
              <div className="col-span-2">
                <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  How were you contacted? *
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
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

              {/* Scammer Contact Information */}
              <div>
                <label htmlFor="scammerPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Scammer&apos;s Phone Number
                </label>
                <input
                  type="tel"
                  id="scammerPhone"
                  name="scammerPhone"
                  placeholder="(123) 456-7890"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.scammerPhone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="scammerEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Scammer&apos;s Email
                </label>
                <input
                  type="email"
                  id="scammerEmail"
                  name="scammerEmail"
                  placeholder="scammer@example.com"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.scammerEmail}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="scammerWebsite" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Scammer&apos;s Website
                </label>
                <input
                  type="text"
                  id="scammerWebsite"
                  name="scammerWebsite"
                  placeholder="https://scam-website.example.com"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.scammerWebsite}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="otherContactInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Other Contact Information
                </label>
                <input
                  type="text"
                  id="otherContactInfo"
                  name="otherContactInfo"
                  placeholder="Social media accounts, usernames, etc."
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.otherContactInfo}
                  onChange={handleChange}
                />
              </div>

              {/* Scam Description */}
              <div className="col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Scam Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  placeholder="Describe the scam in detail. What happened? What did they ask for? Any suspicious details?"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Money Lost */}
              <div className="col-span-2">
                <div className="flex items-center">
                  <input
                    id="moneyLost"
                    name="moneyLost"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.moneyLost}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="moneyLost" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Did you lose money in this scam?
                  </label>
                </div>
                {formData.moneyLost && (
                  <div className="mt-3">
                    <label htmlFor="moneyAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Amount Lost
                    </label>
                    <input
                      type="text"
                      id="moneyAmount"
                      name="moneyAmount"
                      placeholder="$500"
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      value={formData.moneyAmount}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              {/* Personal Information Compromised */}
              <div className="col-span-2">
                <div className="flex items-center">
                  <input
                    id="personalInfoCompromised"
                    name="personalInfoCompromised"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.personalInfoCompromised}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="personalInfoCompromised" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Was your personal information compromised?
                  </label>
                </div>
                {formData.personalInfoCompromised && (
                  <div className="mt-3">
                    <label htmlFor="personalInfoDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      What information was compromised?
                    </label>
                    <input
                      type="text"
                      id="personalInfoDetails"
                      name="personalInfoDetails"
                      placeholder="SSN, credit card numbers, passwords, etc."
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      value={formData.personalInfoDetails}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              {/* Date and Location */}
              <div>
                <label htmlFor="dateOccurred" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date Occurred
                </label>
                <input
                  type="date"
                  id="dateOccurred"
                  name="dateOccurred"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.dateOccurred}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City, State"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              {/* Evidence Upload */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Upload Evidence
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Screenshots, emails, messages, or any other evidence (max 10MB each)
                    </p>
                  </div>
                </div>
                {files.length > 0 && (
                  <ul className="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
                    {files.map((file, index) => (
                      <li key={index} className="py-2 flex justify-between items-center">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 truncate">
                            {file.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Anonymous submission */}
              <div className="col-span-2">
                <div className="flex items-center">
                  <input
                    id="anonymous"
                    name="anonymous"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.anonymous}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Submit anonymously (your identity will not be stored)
                  </label>
                </div>
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
            </div>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
}