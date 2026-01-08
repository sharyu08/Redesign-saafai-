import { redirect } from 'next/navigation';

// This file handles the root URL: http://localhost:3000/
export default function RootPage() {
  // Redirect to the sign-in page as the entry point
  redirect('/auth/sign-in');
  
  // Note: The middleware will handle redirecting authenticated users to /dashboard
  // and unauthenticated users will see the sign-in page
}

// NOTE: If you prefer a simpler static page (like the screenshot), use this:
/*
export default function RootPage() {
  return (
    <div className="p-8">
      <h1>Safai Dashboard</h1>
      <p>
        Go to <a href="/dashboard" className="link-blue">Dashboard</a>
      </p>
    </div>
  );
}
*/