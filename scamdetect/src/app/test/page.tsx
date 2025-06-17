export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Test Page
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            This is a test page to verify routing is working correctly.
          </p>
        </div>
      </div>
    </div>
  );
}
