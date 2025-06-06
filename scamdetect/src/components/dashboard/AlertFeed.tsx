import Link from "next/link";
import { recentAlerts } from "@/lib/data";

export default function AlertFeed() {
  return (
    <div className="space-y-4">
      {recentAlerts.map((alert) => (
        <Link
          key={alert.id}
          href={`/alerts/${alert.id}`}
          className="block p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-start">
            <div
              className={`mt-0.5 flex-shrink-0 h-3 w-3 rounded-full ${
                alert.severity === "high"
                  ? "bg-red-500"
                  : alert.severity === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            ></div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                {alert.title}
              </h4>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {alert.description}
              </p>
              <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span>{new Date(alert.timestamp).toLocaleString()}</span>
                {alert.location && (
                  <>
                    <span className="mx-1">•</span>
                    <span>{alert.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}