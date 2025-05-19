"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { scamTypes, recentActivity, recentAlerts } from "@/lib/data";

export default function Database() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");

  // Combine data for the database
  const databaseItems = [
    ...recentActivity.map(item => ({
      id: item.id,
      title: `${item.type === "scam" ? "Scam Report" : "Malware Report"}: ${item.description.substring(0, 50)}${item.description.length > 50 ? '...' : ''}`,
      type: item.type,
      date: item.date,
      severity: item.severity,
      description: item.description,
      reportedBy: item.user,
      hasEvidence: item.hasFiles
    })),
    ...recentAlerts.map(alert => ({
      id: alert.id,
      title: alert.title,
      type: alert.category === "malware" ? "malware" : "scam",
      date: new Date(alert.timestamp).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      severity: alert.severity,
      description: alert.description,
      reportedBy: "System Alert",
      hasEvidence: false,
      location: alert.location
    }))
  ];

  // Filter logic
  const filteredItems = databaseItems.filter(item => {
    const matchesSearch = 
      searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = 
      filterType === "all" || 
      item.type === filterType;
    
    const matchesSeverity = 
      filterSeverity === "all" || 
      item.severity === filterSeverity;
    
    return matchesSearch && matchesType && matchesSeverity;
  });

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Threat Database
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Search and filter through our database of reported scams and malware threats.
          </p>
        </div>

        {/* Search and filter section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search threats..."
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Type
              </label>
              <select
                id="type"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="scam">Scams</option>
                <option value="malware">Malware</option>
              </select>
            </div>
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Severity
              </label>
              <select
                id="severity"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
              >
                <option value="all">All Severities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              {filteredItems.length} Threats Found
            </h3>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li key={item.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>Reported by: {item.reportedBy}</span>
                        <span className="mx-2">•</span>
                        <span>{item.date}</span>
                        {item.location && (
                          <>
                            <span className="mx-2">•</span>
                            <span>Location: {item.location}</span>
                          </>
                        )}
                        {item.hasEvidence && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              Has Evidence
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 ml-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.severity === "high"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : item.severity === "medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {item.severity.charAt(0).toUpperCase() + item.severity.slice(1)}
                      </span>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                No threats found matching your criteria. Try adjusting your search or filters.
              </li>
            )}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}