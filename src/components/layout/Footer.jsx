"use client";

export default function Footer({ collapsed }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`fixed bottom-0 z-40 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 ${
        collapsed ? 'md:left-20' : 'md:left-72'
      } left-0`}
    >
      <div className="px-4 md:px-8 py-3 flex items-center justify-center">
        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
          © {currentYear} Nagpur Municipal Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
