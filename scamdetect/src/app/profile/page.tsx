"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { recentActivity } from "@/lib/data";

export default function ProfilePage() {
  // Demo user data
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Boston, MA",
    organization: "CyberSafe Consulting",
    role: "Security Analyst",
    joinDate: "May 15, 2024",
    avatar: "AJ", // Initials for avatar placeholder
  });

  // Settings states
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    twoFactorAuth: true,
    dataSharing: false,
    darkMode: true,
  });

  // Filtered activity just for this user
  const userActivity = recentActivity.slice(0, 3);

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  // Handle settings changes
  const handleSettingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSettings({
      ...settings,
      [name]: checked,
    });
  };

  // Handle profile editing
  const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  // Save profile changes
  const saveChanges = () => {
    setUserData(editedUserData);
    setIsEditing(false);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Your Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Profile Information
                  </h2>
                  <button
                    onClick={() => {
                      if (isEditing) {
                        saveChanges();
                      } else {
                        setIsEditing(true);
                        setEditedUserData(userData);
                      }
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </button>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                      {userData.avatar}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    {isEditing ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={editedUserData.name}
                            onChange={handleUserDataChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={editedUserData.email}
                            onChange={handleUserDataChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={editedUserData.phone}
                            onChange={handleUserDataChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={editedUserData.location}
                            onChange={handleUserDataChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Organization
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={editedUserData.organization}
                            onChange={handleUserDataChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Role
                          </label>
                          <input
                            type="text"
                            name="role"
                            value={editedUserData.role}
                            onChange={handleUserDataChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.phone}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.location}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Organization</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.organization}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.role}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Member Since</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.joinDate}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                  Your Recent Activity
                </h2>
                
                {userActivity.length > 0 ? (
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {userActivity.map((activity) => (
                      <li key={activity.id} className="py-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center 
                              ${activity.type === "scam" ? "bg-yellow-100 dark:bg-yellow-900" : "bg-purple-100 dark:bg-purple-900"}`}>
                              {activity.type === "scam" ? (
                                <svg className="h-5 w-5 text-yellow-600 dark:text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              ) : (
                                <svg className="h-5 w-5 text-purple-600 dark:text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                              )}
                            </span>
                          </div>
                          <div className="ml-3 flex-1">
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                Reported a {activity.type}
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {activity.description}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm">
                              <span className="text-gray-500 dark:text-gray-400 mr-2">{activity.date}</span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                activity.severity === "high"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : activity.severity === "medium"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              }`}>
                                {activity.severity.charAt(0).toUpperCase() + activity.severity.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500 dark:text-gray-400">Welcome back. Here&apos;s an overview of recent threat activity.</p>
                    <button className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                      Report a Scam
                    </button>
                  </div>
                )}

                <div className="mt-4 text-center">
                  <a href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    View All Activity
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                  Account Settings
                </h2>

                {/* Notification Settings */}
                <div className="mb-8">
                  <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Notifications
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Alerts</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Receive threat alerts via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="emailNotifications"
                          checked={settings.emailNotifications}
                          onChange={handleSettingChange}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">SMS Notifications</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Receive high severity alerts via SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="smsNotifications"
                          checked={settings.smsNotifications}
                          onChange={handleSettingChange}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Push Notifications</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">In-browser notifications for alerts</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="pushNotifications"
                          checked={settings.pushNotifications}
                          onChange={handleSettingChange}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Security Settings */}
                <div className="mb-8">
                  <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Security
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Two-factor Authentication</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Additional security for your account</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="twoFactorAuth"
                          checked={settings.twoFactorAuth}
                          onChange={handleSettingChange}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="mt-4">
                      <button className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium rounded-md">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>

                {/* Other Settings */}
                <div>
                  <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Other Settings
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Sharing</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Share anonymized data to improve the platform</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="dataSharing"
                          checked={settings.dataSharing}
                          onChange={handleSettingChange}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Toggle dark/light theme</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="darkMode"
                          checked={settings.darkMode}
                          onChange={handleSettingChange}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a href="#" className="text-red-600 dark:text-red-400 hover:underline text-sm font-medium">
                        Deactivate Account
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}