// This layout wraps all auth pages (sign-in, sign-up, login, etc.)
// It provides a consistent layout and handles the auth flow

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8FAFB] dark:bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E0F7FA]/50 dark:bg-cyan-900/30 blur-[120px] rounded-full -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E6F7F9]/60 dark:bg-cyan-800/20 blur-[120px] rounded-full -mr-48 -mb-48 pointer-events-none" />
      
      {/* Main content */}
      <div className="w-full max-w-md relative z-10">
        {children}
      </div>
    </div>
  );
}
